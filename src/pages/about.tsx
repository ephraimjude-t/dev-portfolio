

function About() {
    

    return (
        <div className="p-20 min-h-screen items-center justify-center flex flex-row gap-20">
            <div className="relative p-4 bg-[#D1D2CD]/20 border border-white/40 hover:-translate-y-2 backdrop-blur-[2px] hover:border-white/70 drop-shadow-xl rounded-[50px] hover:shadow-lg transition-all transform-gpu flex flex-col items-center justify-center
                            h-[clamp(80px,85vh,400px)] w-[clamp(100px,50vw,400px)]  tracking-[0.05em]">
                
                <p className="relative h-fit text-center text-[clamp(15px,1vw,10px)]">
                    I'm Ephraim Jude — a 16 year old developer from Kerala, India.
                </p>
                
                <p className="relative h-fit top-[5%] text-center text-[clamp(15px,1vw,10px)]">
                    I build backends, automation tools and financial software. Currently developing a liquidity heatmap trading terminal where finance meets technology.
                </p>
                
                <p className="relative h-fit top-[10%] text-center text-[clamp(15px,1vw,10px)]">
                    If you need someone who learns fast and ships real things — let's work together.
                </p>
            </div>
            <div className="relative p-4 bg-[#D1D2CD]/20 rounded-[50px] backdrop-blur-[2px] border border-white/40 hover:border-white/70 drop-shadow-xl hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col items-center justify-center h-[clamp(80px,70vh,400px)] w-[clamp(100px,40vw,1200px)]  ">
                <h2 className="font-bold" >
                    Technical Arsenal
                </h2>       
                <div className="bg-[#0D1117] rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                    <div className="bg-[#161B22] px-4 py-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-500 ml-2 font-mono">stack.sh</span>
                    </div>
                    <div className="p-6 font-mono text-green-400">
                    <p><span className="text-blue-400">➜</span> <span className="text-white">Frontend:
                    </span>
                    React, TypeScript, Tailwind, GSAP, Threejs.
                    </p>
                    </div>
                    <div className="p-6 font-mono text-green-400">
                    <p><span className="text-blue-400">➜</span> <span className="text-white">Backend & Systems: 
                    </span>
                    FastAPI, Python, C, Linux, System Architecture.
                    </p>
                    </div>
                    <div className="p-6 font-mono text-green-400">
                    <p><span className="text-blue-400">➜</span> <span className="text-white">Data: 
                    </span>
                     WebSockets, Real-time data processing
                    </p>
                    </div>
                    <div className="p-6 font-mono text-green-400">
                    <p><span className="text-blue-400">➜</span> <span className="text-white">DevOps: 
                    </span>
                     Docker, Git, Kuberneties
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;