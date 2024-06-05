'use client';

import { MdOutlineMailOutline } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebook, FaHackerrank, FaLinkedinIn } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';

export const linkData = [
    {
        label: 'Gmail',
        url: 'masumbillah6584@gmail.com',
        icon: <MdOutlineMailOutline className="size-full text-rose-600" />,
    },
    {
        label: 'Github',
        url: 'https://github.com/masumbillah360',
        icon: <AiOutlineGithub className="size-full" />,
    },
    {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/masumbillah6584/',
        icon: <FaLinkedinIn fill="#5ab0f7" className="size-full" />,
    },
    {
        label: 'Facebook',
        url: 'https://www.facebook.com/masumbillah6584/',
        icon: <FaFacebook fill="#0866ff" className="size-full" />,
    },
    {
        label: 'Hacker Rank',
        url: 'https://www.hackerrank.com/profile/masumbillah6584',
        icon: <FaHackerrank fill="#2ec866" className="size-full" />,
    },
    {
        label: 'Codeforces',
        url: 'https://codeforces.com/profile/masum-billah',
        icon: <SiCodeforces fill="#f29ca1" className="size-full" />,
    },
];
