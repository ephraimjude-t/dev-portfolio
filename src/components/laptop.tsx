import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { rendererReference } from 'three/tsl'

gsap.registerPlugin(ScrollTrigger);

function Laptop(){
    
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() =>{

        if (!canvasRef.current) return;
        
        const scene = new THREE.Scene()
        const geo = new THREE.SphereGeometry(30,25,25)
        const material = new THREE.MeshStandardMaterial({
            color: '#000000',
        })
        const mesh = new THREE.Mesh(geo, material)
        scene.add(mesh)
        const lighting = new THREE.AmbientLight('#FFFFFF', 1)
        scene.add(lighting)
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 10, 1000)
        camera.position.z = 100
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current})
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render(scene, camera)
        


    },[])

    return(
        <canvas ref={canvasRef}>

        </canvas>
    )

    
};

export default Laptop;
