

function About() {
    

    return (
        <div className="p-5 md:p-20  min-h-screen items-center justify-center flex flex-col md:flex-row gap-20">
            <div className="relative p-5 gap-5 bg-[#D1D2CD]/20 border border-white/40 hover:-translate-y-2 backdrop-blur-[2px] hover:border-white/70 drop-shadow-xl rounded-[50px] hover:shadow-lg transition-all transform-gpu flex flex-col items-center justify-center
                            w-[20rem] md:w-[40rem] tracking-[0.01rem] ">
                
                <p className=" text-center text-[clamp(15px,1vw,20px)] ">
                    I'm Ephraim Jude, a developer from Kerala, India focused on building software systems, automation tools, and financial technology.
                </p>
                
                <p className=" text-center text-[clamp(15px,1vw,20px)]">
                    I design and build software systems across platforms from automation tools and financial technology to real-time applications and backend infrastructure.
                </p>
                
                <p className=" text-center text-[clamp(15px,1vw,20px)]">
                    I enjoy exploring different areas of engineering and turning complex ideas into practical, working systems.
                </p>
            </div>
            <div className="relative p-5 bg-[#D1D2CD]/20 rounded-[50px] backdrop-blur-[2px] border border-white/40 hover:border-white/70 drop-shadow-xl hover:-translate-y-2 hover:shadow-lg transition-all flex flex-col items-center justify-center w-[20rem] md:w-[40rem] ">
                <h2 className="font-bold" >
                    Technical Arsenal
                </h2>       
                <div className="bg-[#050816] rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                    <div className="bg-[#161B22] px-4 py-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-500 ml-2 font-mono">stack.sh</span>
                    </div>
                    <div className="p-6 font-mono text-[#00E68A]">
                        <p><span className="text-blue-400">➜</span> <span className="text-white">Frontend:
                        </span>
                        React, TypeScript, Tailwind, GSAP, Three.js.
                        </p>
                    </div>
                        <div className="p-6 font-mono text-[#00E68A]">
                        <p><span className="text-blue-400">➜</span> <span className="text-white">Backend & Systems: 
                        </span>
                        Python, C, FastAPI, Linux
                        </p>
                        </div>
                    <div className="p-5 font-mono text-[#00E68A]">
                        <p><span className="text-blue-400">➜</span> <span className="text-white">Data: 
                        </span>
                        WebSockets, Real-time data processing, APIs
                        </p>
                        </div>
                    <div className="p-6 font-mono text-[#00E68A]">
                        <p><span className="text-blue-400">➜</span> <span className="text-white">DevOps: 
                        </span>
                        Docker, Git, Kubernetes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;