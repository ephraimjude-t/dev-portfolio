import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contactform = () => {

    const [message, SetMessage] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        SetMessage((prev) => ({ ...prev, [name]: value }));
    }


    return (
        <>
            <form className="contact-form">
                <div className=" p-5 w-full h-full flex flex-col text-white gap-5">
                    <div className="flex flex-col text-white gap-2 ">
                        <p> name</p>
                        <input className="border border-[#778DA9] w-full rounded-lg px-2 "
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={message.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col text-white gap-2">
                        <p>Email</p>
                        <input className="border border-[#778DA9] w-full rounded-lg px-2"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={message.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col text-white gap-2">
                        <p>Message</p>
                        <textarea className="border border-[#778DA9] w-full rounded-lg px-2"
                            name="message"
                            placeholder="Your Message"
                            value={message.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <button type="submit" disabled={status === 'sending'} className=" text-md h-fit w-[clamp(50px,10vw,200px)] bg-[#1B263B] text-[#778DA9] rounded-lg hover:bg-[#778DA9] hover:text-[#1B263B] hover:-translate-y-2  hover:shadow-lg transition-all duration-500 ease-in-out ">
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && <p>Message sent successfully!</p>}
                    {status === 'error' && <p>Something went wrong. Please try again.</p>}
                </div>
            </form>
        </>
    )

}


export default Contactform;