import { Button } from '@/components/ui/button';
import { Code, Facebook, GithubIcon, Heater, Linkedin } from 'lucide-react';
export const socialLinks = [
    {
        Label: 'Github',
        icon: (
            <Button size={'icon'} className="bg-black border dark:bg-slate-600">
                <GithubIcon />
            </Button>
        ),
        url: 'https://github.com/masumbillah360',
        color: 'bg-black',
        classes: 'bg-black dark:bg-slate-500',
    },
    {
        Label: 'Linkedin',
        icon: (
            <Button
                size={'icon'}
                className="bg-[#5ab0f7] border dark:bg-slate-600">
                <Linkedin />
            </Button>
        ),
        url: 'https://www.linkedin.com/in/masumbillah6584/',
        color: '#5ab0f7',
        classes: 'bg-black dark:bg-slate-500',
    },
    {
        Label: 'Facebook',
        icon: (
            <Button size={'icon'} className="bg-blue-700 border dark:bg-blue-600">
                <Facebook />
            </Button>
        ),
        url: 'https://www.facebook.com/masumbillah6584/',
        color: '#5ab0f7',
    },
    {
        Label: 'Codeforces',
        icon: (
            <Button size={'icon'} className="bg-[#f29ca1] border">
                <Code />
            </Button>
        ),
        url: 'https://codeforces.com/profile/masum-billah',
        color: '#f29ca1',
    },
    {
        Label: 'Hacker Rank',
        icon: (
            <Button size={'icon'} className="bg-[#2ec866] border">
                <Heater />
            </Button>
        ),
        url: 'https://www.hackerrank.com/profile/masumbillah6584',
        color: '#2ec866',
        classes: 'bg-black dark:bg-slate-500',
    },
];
