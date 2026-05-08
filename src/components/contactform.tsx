import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

interface ContactFormData {
  user_name: string;
  user_email: string;
  message: string;
}

const Contactform = () => {

    const form = useRef<HTMLFormElement>(null);

    const [message, setMessage] = useState<ContactFormData>({
        user_name: '',
        user_email: '',
        message: '',
    })

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setMessage((prev) => ({ ...prev, [name]: value }));
    }

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setStatus('sending');
        console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
        console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

        emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            setStatus('success');
            form.current?.reset();
        }, (error) => {
            console.log(error.text);
            setStatus('error');
        });
    };


    return (
        <>
            <section>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className=" p-5 w-full h-full flex flex-col text-white gap-5">
                        <div className="flex flex-col text-white gap-2 ">
                            <p> Name</p>
                            <input className="border border-[#778DA9] w-full rounded-lg px-2 "
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                value={message.user_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col text-white gap-2">
                            <p>Email</p>
                            <input className="border border-[#778DA9] w-full rounded-lg px-2"
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                value={message.user_email}
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
                        <div className="flex flex-row gap-20">
                            <button type="submit" disabled={status === 'sending'} className=" text-md h-[2rem] w-[10rem] bg-[#1B263B] text-[#778DA9] rounded-lg hover:bg-[#778DA9] hover:text-[#1B263B] hover:-translate-y-2  hover:shadow-lg transition-all duration-500 ease-in-out ">
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && <p>$Message sent successfully!</p>}
                            {status === 'error' && <p>$Something went wrong. Please try again.</p>}
                        </div>
                    </div>
                </form>
            </section>
        </>
    )

}


export default Contactform;