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
    
        const renderTick = () => {
        renderer.render(scene, camera);
        };

        const loader = new GLTFLoader()
        loader.load('/laptop/scene.gltf', (gltf) => {
            laptop = gltf.scene
            laptop.visible = false;
            scene.add(laptop);

            const tl = gsap.timeline()

            tl.fromTo(laptop.position, {
                x:0,
                y:-2,
                z:-10,
            },
            {
                x:0,
                y:2,
                z:0,
                onStart:() => {if(laptop) laptop.visible = true},
                immediateRender:true,
                delay:0.8,
                duration:2,
                ease:'power4.inOut'
            })
            tl.to(laptop.rotation,{
                y:Math.PI*2,
                z:-0.5,
                x:1,
                duration:2,
                ease:'power4.out'
                
            })
            tl.fromTo(laptop.position,{
                x:0,
                y:2,
                z:0,
            },
            {
                x:3,
                y:1,
                z:4,
                duration:5,
                scrollTrigger: {
                    trigger:canvasRef.current,
                    markers:true,
                    scrub:2,
                    scroller:'body',
                    start:'bottom 90%',
                    end:'+=80%',
                    toggleActions:'play none none reverse'
                }               
            })
            tl.fromTo(laptop.rotation, {
                y:Math.PI*2,
                z:-0.5,
                x:1,

            },
            {
                y:Math.PI*4,
                z:0.5,
                x:0.2,
                delay:1,
                ease:'power4.out',
                scrollTrigger: {
                    trigger:canvasRef.current,
                    markers:true,
                    scrub:2,
                    scroller:'body',
                    start:'bottom 90%',
                    end:'+=80%',
                    toggleActions:'play none none reverse'
                }
            })
             gsap.ticker.add(renderTick) ; 
        })
        
        


        const re_render =() => {
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera)

        }

        window.addEventListener('resize', re_render);

    

        return() => {
            gsap.ticker.remove(renderTick);
            ScrollTrigger.getAll().forEach(t => t.kill());
            renderer.dispose();
            window.removeEventListener('resize', re_render);


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
