import Background from './components/background'
import Navbar from './components/navbar'
import Laptop from './components/laptop'
import {gsap} from 'gsap'
import { useEffect } from 'react'
import "./App.css"

function App() {
  useEffect(() => {
    gsap.from("#hero-title", {
      opacity:1,
      y:0,
      duration:0.8,
      ease: "power2.out"
    })

  },[])

  return (
    <>
      <div>
        <Laptop />
      </div>
      /*
      <div id='navbar' className=' z-50'>
        <Navbar />
      </div>
      <div className='fixed inset-0 z-0'>
        <Background />
      </div>
      <div>
        <div id='hero-title' style={{
          color:"#1B263B",
          fontSize:"10px",
          opacity:0,
          alignItems:"center"
        }}>
        Hi, I'm Ephraim Jude.
        </div>
        <p id='hero-sub' className='text-center text-[#1B263B] text-[20px] absolute left-[53vh] top-[50vh] !w-[632px] !h-[71px] drop-shadow-xl opacity-50 backdrop-blur-[2px]'>
        I build financial tools, automation systems and backends that solve real problems.
        </p>
        <button id='hero-button' className='absolute z-55 justify-center text-[#778DA9] hover:text-[#1B263B] rounded-2xl bg-[#1B263B] hover:bg-[#778DA9] !w-[150px] !h-[40px] left-[90vh] top-[75vh] drop-shadow-xl backdrop-blur-[2px] transition-all duration-500 ease-in-out '>
        View Projects
        </button> 

      </div>
      */
    </>
  )
}

export default App
