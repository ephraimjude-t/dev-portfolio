import Background from './components/background';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import './App.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  useEffect(() =>{
    if (!homeRef.current || !aboutRef.current || !projectsRef.current || !contactRef.current) return;

    const ctx = gsap.context(() => {

      gsap.to(homeRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.2,     
        scrollTrigger: {
          trigger: homeRef.current,
          start: 'bottom 80%',
          toggleActions: 'play none none reverse'
        }
      });


      gsap.fromTo(aboutRef.current,
        { opacity: 0, y: 500 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',   
          scrollTrigger: {
            trigger: homeRef.current,
            start: 'bottom 90%',    
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(projectsRef.current,
        { opacity: 0, y: 500 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',   
          scrollTrigger: {
            trigger: aboutRef.current, 
            start: 'bottom 95%',    
            toggleActions: 'play none none reverse'
          }
        }
      );

       gsap.fromTo(contactRef.current,
        { opacity: 0, y: 500 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',   
          scrollTrigger: {
            trigger: projectsRef.current, 
            start: 'bottom 95%',    
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Background />
      </div>

      <div className="w-fit h-fit relative z-50">
        <Navbar />
      </div>

      <main className="relative z-20">
        
        <section ref={homeRef} id="home" className="h-screen relative z-20">
          <Home />
        </section>

        <section ref={aboutRef} id="about" className="h-screen relative z-20 opacity-0">
          <About />
        </section>

        <section ref={projectsRef} id="projects" className="min-h-screen relative z-20 opacity-0">
          <Projects />
        </section>

        <section ref={contactRef} id="contact" className="min-h-screen relative z-20 opacity-0">
          <Contact />
        </section>
      </main>
    </>
  );
}
  
export default App;