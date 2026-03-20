import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function About() {
    const pageRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!pageRef.current) return;

        const children = pageRef.current.children

        gsap.from(children, {
            opacity: 0,
            y:60,
            durataion:0.8,
            stagger:0.2,
            ease:'power2.out',
            scrollTrigger: {
                trigger: pageRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        })

    }, [])

    

    return(
        <>
            <div ref={pageRef}>
                <p>
                    I'm Ephraim Jude — a 16 year old developer from Kerala, India.
                </p>
                <p>
                    I build backends, automation tools and financial software. Currently developing a liquidity heatmap trading terminal where finance meets technology.
                </p>
                <p>
                    If you need someone who learns fast and ships real things — let's work together.
                </p>
            </div>
        </>
    )

}
export default About;