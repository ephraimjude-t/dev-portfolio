import { useRef, useEffect } from 'react';
import * as THREE from 'three'

function Background(){
    const canvasref = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {

        let animationId: number


        if (!canvasref.current) return;

        const scene = new THREE.Scene();
        const geometry = new THREE.CircleGeometry(4, 32)
        const material = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.3,
            color: '#1B263B'
        });

        const spacing = 45;

        const cols = Math.ceil(window.innerWidth / spacing)+2;
        const rows = Math.ceil(window.innerHeight / spacing)+2;
        const count = cols*rows;

        const mesh = new THREE.InstancedMesh(geometry, material, count);

        const objects = new THREE.Object3D();

        let i = 0
        for (let x = 0; x< cols; x++){
            for (let y=0; y<rows; y++){
                const posX = ( x*spacing) - (window.innerWidth/2)+(spacing/2)
                const posY = (y*spacing) - (window.innerHeight/2)+(spacing/2)

                objects.position.set(posX, posY, 0 );
                objects.updateMatrix();
                mesh.setMatrixAt(i++, objects.matrix)
            }
        }


        scene.add(mesh)
        scene.background = new THREE.Color('#E0E1DD')

        const camera = new THREE.OrthographicCamera(
            window.innerWidth/-2,
            window.innerWidth/2,
            window.innerHeight/2,
            window.innerHeight/-2,
            0.1,
            1000,
        );
        camera.position.z = 1
        scene.add(camera)

        const lighting = new THREE.AmbientLight( 0xffffff , 10)
        scene.add(lighting)

        const renderer = new THREE.WebGLRenderer({canvas: canvasref.current, alpha: true, antialias: true});
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.render(scene, camera);

        //re-render
        const re_render = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.left = window.innerWidth/-2;
            camera.right = window.innerWidth/2;
            camera.top = window.innerHeight/2;
            camera.bottom = window.innerHeight/-2;
            camera.updateProjectionMatrix();
            renderer.setClearColor(0x000000, 0);
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            renderer.render(scene, camera)
           
        }
        const mouse = new THREE.Vector2(-1000, -1000);

        const onMouseMove = (Event: MouseEvent) =>{
            mouse.x = (Event.clientX - window.innerWidth/ 2);
            mouse.y = -(Event.clientY - window.innerHeight/ 2);
        };

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            let idx = 0;
            const totalWidth = (cols - 1) * spacing;
            const totalHeight = (rows - 1) * spacing;
           
            for (let x = 0; x < cols; x++){
                for ( let y = 0; y < rows; y++){
                    const posX = ( x*spacing) - (totalWidth/2)
                    const posY = (y*spacing) - (totalHeight/2)

                    const dx = mouse.x - posX;
                    const dy = mouse.y - posY;
                    const dist = Math.sqrt(dx * dx + dy * dy);



                    const radius = 100
                    let scale = 1
                 

                    if (dist < radius){
                        scale = 1 + (1 - dist/radius) * 1.5;  
                    }
                    const centerDx = posX  
                    const centerDy = posY  
                    const centerDist = Math.sqrt(centerDx * centerDx + centerDy * centerDy)
                    const maxDist = Math.sqrt(
                        (window.innerWidth / 2) ** 2 + 
                        (window.innerHeight / 2) ** 2
                    )
                    const edgeFade = 1 - (centerDist / maxDist)

                   
                    const finalScale = scale * Math.max(0.2 , edgeFade * 1)

                    objects.position.set(posX, posY, 0);
                    objects.scale.set(finalScale, finalScale, 1);
                    objects.updateMatrix();
                    mesh.setMatrixAt(idx++, objects.matrix);
                }
            }
            mesh.instanceMatrix.needsUpdate = true;
            renderer.render(scene, camera);
        }
        animate();
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', re_render);

        return () => {

            window.removeEventListener('resize', re_render);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationId);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        }
           
        
    },[])

    return(
        <canvas ref={canvasref} className="fixed top-0 left-0 w-full h-full block pointer-events-none" >

        </canvas>
        
    );
};

export default Background;

