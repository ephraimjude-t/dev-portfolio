import Background from './components/background';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import './App.css';
import Laptop from './components/laptop';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  
  useEffect(() =>{
    if (!homeRef.current) return;
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(homeRef.current, {
        opacity:0,
        y:-50,
        duration:0.2,     
        immediateRender:false,
        ease:'power2.out',
        scrollTrigger: {
          trigger:homeRef.current,
          start:'bottom 80%',
          toggleActions:'play none none reverse'
        }

      })

      gsap.fromTo(aboutRef.current,{
        opacity:0,
        y:500,
      },
      {
        opacity:1,
        y:0,
        duration:1.2,
        immediateRender:false,
        stagger:10,
        ease:'power2.out',   
        scrollTrigger:{
          trigger:homeRef.current,
          scroller:'body',
          start:'bottom 90%',    
          toggleActions:'play none none reverse'
        }

      })
    })

    return() => ctx.revert()

    

  },[])

  return(
    <>
      <div id='background' style={{ position:'fixed', top:0, left:0, width:'100%', height:'100vh', zIndex:-1 }}>
        <Background />
      </div>
      <div id='element' style={{position:'fixed', top:0, left:0, width:'100%', height:'100vh', zIndex:1}}>
        <Laptop />
      </div>
      <div id='navbar' style={{width:'fit-content', height:'fit-content'}}>
        <Navbar />
      </div>
      <div style={{ position:'relative', zIndex:20}}>
        <section ref={homeRef} id='home' style={{height:'100vh', position:'relative', zIndex:20}} >
          <Home />
        </section>
        <section ref={aboutRef} id='about' style={{height:'100vh', position:'relative', zIndex:20, opacity:0,}} >
          <About />
        </section>
      </div>
      
    </>
  )
}
  
export default App;
