'use client';

import { FramerInput, FramerTextArea } from '@/components/framer-motion/input';
import Titlebar from '@/components/title-bar';
import { Label } from '@/components/ui/label';
import lottieFile from '@/public/lottie/contact.json';
import AnimationLottieClient from '@/components/lottie/client';

const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
    };
    return (
        <div id="contact" className="relative min-h-screen">
            {/* <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
                <span className="bg-slate-200 dark:bg-[#1a1443] w-fit rotate-90 p-2 px-5 text-xl rounded-md">
                    CONTACT
                </span>
                <span className="h-36 w-[2px] bg-slate-200 dark:bg-[#1a1443]"></span>
            </div> */}
            <Titlebar title="Contact Me" />
            <div className="flex justify-between items-center">
                <div className="hidden md:block w-full h-3/4">
                    <AnimationLottieClient animationPath={lottieFile} />
                </div>
                <form className="my-8 w-full bg-slate-200 dark:bg-slate-900 p-3 rounded-lg opacity-80 backdrop-blur-2xl" onSubmit={handleSubmit}>
                    <Label htmlFor="firstname">First name</Label>
                    <FramerInput
                        id="firstname"
                        placeholder="Tyler"
                        type="text"
                    />

                    <Label htmlFor="email">Email Address</Label>
                    <FramerInput
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                    />
                    <Label htmlFor="subject">Subject</Label>
                    <FramerInput id="Subject" placeholder="Tyler" type="text" />
                    <Label htmlFor="password">Message</Label>
                    <FramerTextArea
                        className="h-full"
                        rows={6}
                        id="password"
                        placeholder="Write message..."
                    />

                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-7"
                        type="submit">
                        Submit
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4  h-[1px] w-full" />
                </form>
            </div>
        </div>
    );
};
const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};
export default ContactSection;
