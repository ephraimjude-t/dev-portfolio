
function Projects(){

    return(
        <>
        <div className="p-20 min-h-screen items-center justify-center flex flex-col gap-5">
            <div className="relative p-4 bg-[#D1D2CD]/20 border border-white/40 hover:-translate-y-2 backdrop-blur-[2px] hover:border-white/70 drop-shadow-xl shadow-md rounded-[50px] hover:shadow-lg transition-all transform-gpu flex flex-col items-center justify-center h-[clamp(80px,35vh,400px)] w-[clamp(100px,80vw,900px)] tracking-[0.05em]">
                <div className="flex flex-row items-center gap-30 p-4 ">
                    <div className="relative w-[clamp(80px,40vw,400px)] h-[clamp(20px,30vh,200px)] rounded-[50px]">
                        <img src="/terminal.png" className="w-full h-full object-contain"/>
                    </div>
                    <div className="flex flex-col gap-5 p-6">
                        <h3 className="text-[#1B263B] font-bold text-[clamp(15px,1.5vw,40px)] ">
                            Crypto Dashboard
                        </h3>
                        <p className="text-[#1B263B]/50 font-medium">
                            Tech Stack: React, Ts, Fastapi, Python
                        </p>
                        <button className=" w-[clamp(20px,5vw,100px)] h-fit border border-[#1B263B] rounded-xl hover:bg-[#1B263B] hover:text-[#FFFF]/50 hover:-translate-y-2 hover:shadow-lg transition-all">
                            Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative p-4 bg-[#D1D2CD]/20 border border-white/40 hover:-translate-y-2 backdrop-blur-[2px] hover:border-white/70 drop-shadow-xl shadow-md  rounded-[50px] hover:shadow-lg transition-all transform-gpu flex flex-col items-center justify-center h-[clamp(80px,35vh,400px)] w-[clamp(100px,80vw,900px)] tracking-[0.05em]">
            </div>

        </div>
        </>
    );

}
export default Projects;