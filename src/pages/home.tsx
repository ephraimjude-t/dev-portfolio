import { gsap } from 'gsap'
import { useEffect } from 'react'
import "./home.css"

function Home() {
  useEffect(() => {
    
    gsap.fromTo("#hero-title, #hero-button", {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power4.inOut'
    })
      
    gsap.fromTo("#hero-sub", {
      opacity: 0,
      y: 100
    },
    {
      opacity: 0.7, 
      y: 0,
      duration: 1.2,
      ease: 'power4.inOut'
    })
  }, [])

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden flex flex-col items-center">
        
       
        <h1 
          id='hero-title' 
          className='absolute left-1/2 top-[35%] -translate-x-1/2 flex items-center justify-center text-center font-bold z-[100] drop-shadow-xl backdrop-blur-[2px] text-[#1B263B] opacity-0 w-[clamp(200px,100vw,500px)] h-fit text-[clamp(15px,7vw,40px)]'
        >
          Hi, I'm Ephraim Jude.
        </h1>

       
        <h2 
          id='hero-sub' 
          className='absolute left-1/2 top-[50%] -translate-x-1/2 flex items-center justify-center text-center font-normal z-[100] drop-shadow-xl backdrop-blur-[2px] text-[#1B263B] opacity-0 w-[clamp(200px,90vw,600px)] h-fit text-[clamp(15px,1.5vw,40px)]'
        >
          I build financial tools, automation systems and backends that solve problems.
        </h2>

        <button 
          id='hero-button' 
          className='relative top-[70%] text-center z-[55] rounded-2xl transition-all duration-500 ease-in-out opacity-0 p-2 bg-[#1B263B] text-[#778DA9] hover:bg-[#778DA9] hover:text-[#1B263B] hover:-translate-y-2 hover:shadow-lg drop-shadow-xl backdrop-blur-[2px] w-[clamp(10px,12vw,130px)] h-[clamp(30px,10vh,40px)]'
        >
          View Projects
        </button> 
        
      </div>
    </>
  )
}

export default Home;