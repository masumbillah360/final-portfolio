'use client';

import Titlebar from '@/components/title-bar';

const ContactSection = () => {
    return (
        <div id="contact" className="relative min-h-screen">
            {/* <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
                <span className="bg-slate-200 dark:bg-[#1a1443] w-fit rotate-90 p-2 px-5 text-xl rounded-md">
                    CONTACT
                </span>
                <span className="h-36 w-[2px] bg-slate-200 dark:bg-[#1a1443]"></span>
            </div> */}
            <Titlebar title="Contact Me" />
        </div>
    );
};

export default ContactSection;
