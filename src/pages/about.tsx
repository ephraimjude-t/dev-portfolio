import { useEffect, useRef } from "react";
import './about.css'


function About() {
    const pageRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!pageRef.current) return;


    }, [])
    
    return(
        <div ref={pageRef} style={{padding:'5rem'}}>
            <div className="backdrop-blur-2xl drop-shadow-2xl opacity-75 " style={{
                position:'relative',
                display:'flex',
                flexDirection:'column',
                padding:10,
                backgroundColor:'#D1D2CD',
                height:'clamp(80px, 35vh, 400px)',
                width:'clamp(100px, 80vw, 400px)',
                top:'15%',
                left:'10%',
                borderRadius:'50px',
                borderColor:'#FFFFFF'
                }} >
                <p style={{
                    position:'relative',
                    height:'fit-content',
                    textAlign:'center',
                    fontSize:'clamp(15px, 1vw, 10px)'
                }}>
                    I'm Ephraim Jude — a 16 year old developer from Kerala, India.
                </p>
                <p style={{
                    position:'relative',
                    height:'fit-content',
                    top:'5%',
                    textAlign:'center',
                    fontSize:'clamp(15px, 1vw, 10px)'
                }}>
                    I build backends, automation tools and financial software. Currently developing a liquidity heatmap trading terminal where finance meets technology.
                </p>
                <p style={{
                    position:'relative',
                    height:'fit-content',
                    top:'10%',
                    textAlign:'center',
                    fontSize:'clamp(15px, 1vw, 10px)'
                }}>
                    If you need someone who learns fast and ships real things — let's work together.
                </p>
            </div>
            <div style={{
                position:'absolute',
                display:'flex',
                flexDirection:'column',
                backgroundColor:'#D1D2CD',
                height:'clamp(80px, 40vh, 400px)',
                width:'clamp(100px, 80vw, 1200px)',
                top:'55%',
                left:'50%',
                transform:'translateX(-50%)',
                borderRadius:'50px',
                borderColor:'#FFFFFF',
                opacity:0.75,
                
            }}>

            </div>
        </div>
    )

}
export default About;