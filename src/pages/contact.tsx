import Contactform from "../components/contactform";
import { MdMailOutline} from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Contact(){

    return(
        <>
            <div className="items-center flex flex-col gap-5">
                <h2 className=" text-[#1B263B] font-extrabold text-[clamp(2rem,7vh,5rem)]">
                    Let's Connect.
                </h2>
                <p className="text-[#1B263B]/70 text-[clamp(0.5rem,5vh,1rem)] tracking-[0.05rem] text-center w-[20rem]">
                    Ready to build something togeather or just wanna chat? Drop me a line
                </p>
                <div className="p-5 items-center flex flex-col md:flex-row gap-20">
                    <div className="relative p-5 bg-[#D1D2CD]/20 border border-white/40 hover:-translate-y-2 backdrop-blur-[2px] hover:border-white/70 drop-shadow-xl rounded-[50px] hover:shadow-lg transition-all transform-gpu flex flex-col items-center justify-center
                                w-[20.5rem]  tracking-[0.05em]">
                                    <div className="flex flex-col gap-5">
                                        <p className="font-bold text-center">
                                            Contact Details
                                        </p>
                                        <div className="flex flex-row gap-2">
                                            <MdMailOutline size={24} />
                                            <p> 
                                                ephraimjude.t@gmail.com
                                            </p>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <FaGithub size={24} />
                                            <p>
                                                github.com/ephraimjude-t
                                            </p>
                                        </div>

                                    </div>

                    </div>
                    <div className="relative p-5 bg-[#D1D2CD]/20 border border-white/40 hover:-translate-y-2 backdrop-blur-[2px] hover:border-white/70 drop-shadow-xl rounded-[50px] hover:shadow-lg transition-all transform-gpu flex flex-col items-center justify-center
                                w-[20.5rem] md:w-[35rem] h-[25.5rem] tracking-[0.05em]">
                                    <div className="bg-[#0D1117] rounded-lg overflow-hidden border border-gray-700 shadow-2xl w-full">
                                        <div className="bg-[#161B22] px-4 py-2 flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="text-xs text-gray-500 ml-2 font-mono">contact.sh</span>
                                        </div>
                                        <Contactform />
                                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Contact;
