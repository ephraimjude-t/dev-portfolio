import { gsap } from 'gsap'
import { useEffect } from 'react'
import "./home.css"

interface ScrollbuttonProps {
  onScrollToProjects: () => void;
}

function Home({ onScrollToProjects }: ScrollbuttonProps) {
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
      <div className='w-full min-h-screen flex flex-col p-5 gap-15 items-center justify-center text-center'>
        <div className="flex flex-col ">
          <h1 
            id='hero-title' 
            className='font-bold drop-shadow-xl backdrop-blur-[2px] text-[#1B263B] opacity-0 text-[2rem] md:text-[2rem] lg:text-[3rem]'
          >
            Hi, I'm Ephraim Jude.
          </h1>
          <h2 
            id='hero-sub' 
            className=' p-5 w-[25rem] md:w-[40rem] font-normal drop-shadow-xl backdrop-blur-[2px] text-[#1B263B] opacity-0 text-[clamp(15px,1.5vw,40px)]'
          >
            I design and engineer software systems across platforms.
          </h2>       
        </div>
        <div>
          <button 
            onClick={onScrollToProjects}
            id='hero-button' 
            className=' rounded-2xl transition-all duration-500 ease-in-out opacity-0 p-2 bg-[#1B263B] text-[#778DA9] hover:bg-[#778DA9] hover:text-[#1B263B] hover:shadow-lg hover:-translate-y-2  drop-shadow-xl backdrop-blur-[2px] w-[clamp(5rem,9rem,20rem)] h-[clamp(1rem,2.5rem,3rem)]'
          >
            View Projects
          </button> 
        </div>
      </div>
    </>
  )
}

export default Home;