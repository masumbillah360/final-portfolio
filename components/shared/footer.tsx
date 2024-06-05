'use client';

import Link from 'next/link';
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdMailOutline } from 'react-icons/md';
import { FaFacebook, FaHackerrank, FaLinkedin } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';

const linkData = [
    {
        label: 'Gmail',
        url: '/',
        icon: <MdMailOutline className="size-full" />,
    },
    {
        label: 'Github',
        url: '/',
        icon: <AiOutlineGithub className="size-full" />,
    },
    {
        label: 'Linkedin',
        url: '/',
        icon: <FaLinkedin className="size-full" />,
    },
    {
        label: 'Facebook',
        url: '/',
        icon: <FaFacebook className="size-full" />,
    },
    {
        label: 'Hacker Rank',
        url: '/',
        icon: <FaHackerrank className="size-full" />,
    },
    {
        label: 'Hacker Rank',
        url: '/',
        icon: <SiCodeforces className="size-full" />,
    },
];
const Footer = () => {
    return (
        <footer className="border rounded-lg rounded-b-none p-4 md:p-8 lg:p-16">
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <h4 className="font-semibold underline underline-offset-4 mb-2">
                        Tap To Connect
                    </h4>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {linkData.map((l, i) => (
                            <Link
                                href={'/'}
                                target="_blank"
                                className="h-10 md:h-16 w-10 md:w-16 rounded-full border"
                                key={i + 'Link Key'}>
                                {l.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="text-center text-muted-foreground">
                    <p>&copy; Copy Right Reserved by Masum Billah </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
