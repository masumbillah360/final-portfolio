'use client';
import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh]">
            <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-8 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 border-8 border-t-transparent border-purple-400 rounded-full animate-spin [animation-duration:1.5s]"></div>
            </div>
            <div className="mt-3 text-center">
                <span className="font-semibold text-2xl text-primary dark:text-primary-foreground">
                    Please Wait
                </span>
            </div>
        </div>
    );
};

export default Loader;
