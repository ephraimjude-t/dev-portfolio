import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'


gsap.registerPlugin(ScrollTrigger);

function Laptop(){
    
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() =>{
        if (!canvasRef.current) return;

        let laptop: THREE.Group | null = null;
        let stopAnimation = false;
        
        const scene = new THREE.Scene()
        const lighting = new THREE.DirectionalLight(0xffffff, 1)
        lighting.position.set(5, 5, 5);
        scene.add(lighting)
        const fillLight = new THREE.DirectionalLight(0xffffff, 1)
        fillLight.position.set(-5, 0, -5)
        scene.add(fillLight)
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000)
        camera.position.z = 10
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha:true})
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.render(scene, camera)

        const tl = gsap.timeline({paused:true})
            

        const loader = new GLTFLoader()
        loader.load('/laptop/scene.gltf', (gltf) => {
            laptop = gltf.scene
            scene.add(laptop)

            gsap.to(laptop.position, {
                x:7,
                y:3,
                delay:0.5,
                duration:10,
                ease:'elastic.out'
            })
            gsap.to(laptop.rotation,{
                y:Math.PI*2,
                delay:0.5,
                z:1,
                duration:2,
                ease:'power4.out'
                
            })
            tl.to(laptop.rotation, {
                y:"+=1"
            })
        })


        
        const handleMouseEnter = () => { if(laptop) tl.play()}
        const handleMouseLeave = () => { if(laptop) tl.reverse()}
        const canvas = canvasRef.current;


        const animate = () => { 
            if (stopAnimation) return;
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
    
        }
        animate();

        const re_render =() => {
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera)

        }

        window.addEventListener('resize', re_render);
        canvas.addEventListener('mouseenter', handleMouseEnter);
        canvas.addEventListener('mouseleave', handleMouseLeave);
    

        return() => {
            stopAnimation = true
            renderer.dispose();
            window.removeEventListener('resize', re_render);
            canvas.removeEventListener('mouseenter', handleMouseEnter);
            canvas.removeEventListener('mouseleave', handleMouseLeave);

            if (laptop) {
                laptop.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.geometry.dispose()

                        if (Array.isArray(child.material)) {
                            child.material.forEach(m => m.dispose());
                        } else {
                            child.material.dispose();
                        }
                    };
                })
            };
            scene.clear();
        }


    },[])

    return(
        <canvas ref={canvasRef} className='z-10'>

        </canvas>
    )

    
};

export default Laptop;
