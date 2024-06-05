'use client';

import { MdOutlineMailOutline } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebook, FaHackerrank, FaLinkedinIn } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';

export const linkData = [
    {
        label: 'Gmail',
        url: '/',
        icon: <MdOutlineMailOutline className="size-full text-rose-600" />,
    },
    {
        label: 'Github',
        url: '/',
        icon: <AiOutlineGithub className="size-full" />,
    },
    {
        label: 'Linkedin',
        url: '/',
        icon: <FaLinkedinIn fill="#5ab0f7" className="size-full" />,
    },
    {
        label: 'Facebook',
        url: '/',
        icon: <FaFacebook fill="#0866ff" className="size-full" />,
    },
    {
        label: 'Hacker Rank',
        url: '/',
        icon: <FaHackerrank fill="#2ec866" className="size-full" />,
    },
    {
        label: 'Hacker Rank',
        url: '/',
        icon: <SiCodeforces fill="#f29ca1" className="size-full" />,
    },
];
