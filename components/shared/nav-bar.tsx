'use client';

import { routes, sectionIds } from '@/constants';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BorderButton } from '../framer-motion/moving-border';

function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const targetHeight = window.innerHeight / 2;
        for (const [section, id] of Object.entries(sectionIds)) {
            const sectionElement = document?.getElementById(id);
            const rect = sectionElement?.getBoundingClientRect();
            if (
                rect?.top &&
                rect?.top <= targetHeight &&
                rect?.bottom &&
                rect?.bottom >= targetHeight
            ) {
                setActiveSection(section);
                break;
            }
        }
    };

    useEffect(() => {
        const handleLocationChange = () => {
            setActiveSection(pathname === '/blog' ? 'blogs' : 'home');
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('popstate', handleLocationChange);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, [pathname]);

    return (
        <nav className="rounded-lg border-b transition-all duration-300 hover:border-b-[#16f2b3]">
            <div className="flex items-center justify-between py-2">
                <div className="flex flex-shrink-0 items-center ml-2">
                    <BorderButton duration={5000}>
                        <>
                            <Link
                                href="/"
                                className="hidden sm:block text-[#16f2b3] text-3xl font-bold uppercase px-3 py-2">
                                Masum Billah
                            </Link>
                            <Link
                                href="/"
                                className="block sm:hidden text-[#16f2b3] text-3xl font-bold uppercase px-3 py-1">
                                MB
                            </Link>
                        </>
                    </BorderButton>
                </div>

                <ul
                    className="mt-4  h-screen max-h-0 w-full flex-col items-start text-sm hidden md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 lg:flex"
                    id="navbar-default">
                    {routes.map((route) => (
                        <li key={route.label}>
                            <Link
                                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                                href={
                                    pathname === '/'
                                        ? `#${sectionIds[route.path]}`
                                        : `/#${sectionIds[route.path]}`
                                }>
                                <div
                                    className={`text-white transition-colors duration-300 hover:text-pink-600 font-semibold ${
                                        activeSection === route.path
                                            ? 'text-pink-600 border-b'
                                            : ''
                                    }`}>
                                    {route.label}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Menu className="lg:hidden h-10 w-10 mr-2" />
            </div>
        </nav>
    );
}

export default Navbar;
