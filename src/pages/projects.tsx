
function Projects(){

    return(
        <>
        <div className="p-5 md:p-20 items-center flex flex-col gap-5">
            <div className="relative p-5 bg-[#D1D2CD]/20 border border-white/40 hover:-translate-y-2 backdrop-blur-[2px] hover:border-white/70 drop-shadow-xl shadow-md rounded-[50px] hover:shadow-lg transition-all transform-gpu flex flex-col items-center justify-center w-[25rem]tracking-[0.05em]">
                <div className="flex flex-col md:flex-row items-center gap-5 p-4 ">
                    <div className="relative rounded-[50px] md:w-[20rem] h-fit">
                        <img src="/terminal.png" className="w-full h-full object-contain"/>
                    </div>
                    <div className="flex flex-col gap-5 p-6">
                        <h3 className="text-[#1B263B] font-bold text-[1.5rem] ">
                            Crypto Dashboard
                        </h3>
                        <p className="text-[#1B263B]/50 font-medium">
                            Tech Stack: React, Ts, Fastapi, Python
                        </p>
                        <button className=" w-[5rem] h-fit border border-[#1B263B] rounded-xl hover:bg-[#1B263B] hover:text-[#FFFF]/50 hover:-translate-y-2 hover:shadow-lg transition-all">
                            Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}
export default Projects;