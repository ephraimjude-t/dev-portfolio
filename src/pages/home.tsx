import {gsap} from 'gsap'
import { useEffect } from 'react'
import "./home.css"


function Home() {
  useEffect(() => {
    gsap.to("#hero-title, #hero-button", {
      opacity:1,
      y:0,
      duration:1.2,
      ease: "power4.inout"
    })
    gsap.to("#hero-sub", {
      opacity:0.7,
      y:0,
      duration:1.2,
      ease:'power4.inOut'
    })

  },[])

  return (
    <>
      <div>
        <div id='hero-title' className='text-[#1B263B] z-100 drop-shadow-xl backdrop-blur-[2px] ' style={{
          position:'absolute',
          display:'flex',
          width:'clamp(200px, 100vw, 500px)',
          height:'fit-content',
          left:'50%',
          top:'35%',
          transform:'translateX(-50%)',
          fontSize:'clamp(15px, 7vw, 40px',
          fontWeight:'bold',
          textAlign:'center',
          alignItems:'center',
          justifyContent:'center',
          opacity:0,


        }}>
        Hi, I'm Ephraim Jude.
        </div>
        <p id='hero-sub' className='text-[#1B263B] z-100 drop-shadow-xl backdrop-blur-[2px]' style={{
          position:'absolute',
          display:'flex',
          width:'clamp(200px, 90vw, 600px)',
          height:'fit-content',
          left:'50%',
          top:'50%',
          transform:'translateX(-50%)',
          fontSize:'clamp(15px, 1.5vw, 40px)',
          fontWeight:'regular',
          textAlign:'center',
          alignItems:'center',
          justifyContent:'center',
          opacity:0,
        }}>
        I build financial tools, automation systems and backends that solve real problems.
        </p>
        <button id='hero-button' className='z-55 text-[#778DA9] hover:text-[#1B263B] rounded-2xl bg-[#1B263B] hover:bg-[#778DA9] drop-shadow-xl backdrop-blur-[2px] transition-all duration-500 ease-in-out ' style={{
          display:'flex',
          position:'absolute',
          padding:'0.5rem 0.5rem',
          width:'clamp(130px, 12vw, 100px)',
          height:'clamp(40px, 4vh, 30px)',
          left:'50%',
          top:'70%',
          transform:'translateX(-50%)',
          textAlign:'center',
          alignItems:'center',
          justifyContent:'center',
          opacity:0
        }}>
        View Projects
        </button> 
      </div>
    </>
  )
}

export default Home;
