'use client';

import { routes, sectionIds } from '@/constants';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BorderButton } from '../framer-motion/moving-border';
import { ModeToggle } from '../theme/mode-toggle';

// for mobile nav
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('');
    const [mounted, setMounted] = useState(false);

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
        <nav className="rounded-lg border-b transition-all duration-300 hover:border-b-primary">
            <div className="flex items-center justify-between py-2">
                <div className="flex flex-shrink-0 items-center ml-2">
                    <BorderButton duration={5000}>
                        <>
                            <Link
                                href="/"
                                className="hidden sm:block text-primary dark:text-primary-foreground text-3xl font-bold uppercase px-3 py-2">
                                Masum Billah
                            </Link>
                            <Link
                                href="/"
                                className="block sm:hidden text-primary dark:text-primary-foreground text-2xl font-bold uppercase px-3 py-1">
                                MB
                            </Link>
                        </>
                    </BorderButton>
                </div>

                <ul
                    className="mt-4  h-screen max-h-0 w-full flex-col items-start text-sm hidden md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 lg:flex"
                    id="navbar-default">
                    <li className="mr-3">
                        <ModeToggle />
                    </li>
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
                                    className={`dark:text-white transition-colors duration-300 hover:text-violet-500 font-semibold ${
                                        activeSection === route.path
                                            ? 'text-primary border-b-2 border-b-primary'
                                            : ''
                                    }`}>
                                    {route.label}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden flex justify-center items-center gap-2">
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="h-10 w-10 mr-2 border rounded-md text-primary border-primary" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="text-primary font-2xl font-bold">
                                    Masum Billah
                                </SheetTitle>
                            </SheetHeader>
                            <SheetDescription>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4"></div>
                                    <div className="grid grid-cols-4 items-center gap-4"></div>
                                </div>
                                <ul
                                    className="mt-4  h-screen max-h-0 w-full flex-col items-start text-sm  md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 lg:flex"
                                    id="navbar-mobile">
                                    {routes.map((route) => (
                                        <li key={route.label}>
                                            <SheetClose>
                                                <Link
                                                    className="block px-4 py-2 no-underline outline-none hover:no-underline"
                                                    href={
                                                        pathname === '/'
                                                            ? `#${
                                                                  sectionIds[
                                                                      route.path
                                                                  ]
                                                              }`
                                                            : `/#${
                                                                  sectionIds[
                                                                      route.path
                                                                  ]
                                                              }`
                                                    }>
                                                    <div
                                                        className={`dark:text-white transition-colors duration-300 hover:text-violet-500 font-semibold ${
                                                            activeSection ===
                                                            route.path
                                                                ? 'text-primary border-b-2 border-b-primary'
                                                                : ''
                                                        }`}>
                                                        {route.label}
                                                    </div>
                                                </Link>
                                            </SheetClose>
                                        </li>
                                    ))}
                                </ul>
                            </SheetDescription>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
