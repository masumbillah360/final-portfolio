import React from 'react';
import { BorderButton } from './framer-motion/moving-border';

const Titlebar = ({ title }: { title: string }) => {
    return (
        <>
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center py-2">
                <div className="flex items-center">
                    <span className="w-10 md:w-24 h-[2px] bg-[#1a1443]"></span>
                    <BorderButton
                        containerClassName="cursor-default size-auto"
                        duration={5000}>
                        <span className="bg-white text-violet-950 dark:bg-[#201844] w-fit dark:text-white p-2 px-5 text-xl rounded-md uppercase font-bold tracking-widest border border-primary dark:border-[#1a1443]">
                            {title}
                        </span>
                    </BorderButton>
                    <span className="w-10 md:w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>
        </>
    );
};

export default Titlebar;
