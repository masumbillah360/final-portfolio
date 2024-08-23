'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { Menu } from 'lucide-react';

import { Button } from '../ui/button';
import { ModeToggle } from '../theme/mode-toggle';
import { BorderButton } from '../framer-motion/moving-border';

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

import { routes, sectionIds } from '@/constants';

const Navbar = () => {
    const router = useRouter();

    const [mount, setMount] = useState<boolean>(false);
    useEffect(() => {
        setMount(true);
    }, []);

    return (
        <nav className="rounded-lg border-b transition-all duration-300 hover:border-b-primary">
            <div className="flex items-center justify-between py-2">
                <div className="flex flex-shrink-0 items-center ml-2">
                    {mount ? (
                        <BorderButton
                            onClick={() => {
                                router.replace('/');
                            }}
                            duration={5000}>
                            <span className="hidden sm:block text-primary dark:text-primary-foreground text-3xl font-bold uppercase px-3 py-2">
                                Masum Billah
                            </span>
                            <span className="block sm:hidden text-primary dark:text-primary-foreground text-2xl font-bold uppercase px-3 py-1">
                                MB
                            </span>
                        </BorderButton>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={() => {
                                    router.replace('/');
                                }}
                                className="hidden sm:block text-primary dark:text-primary-foreground text-3xl font-bold uppercase px-3 py-2">
                                Masum Billah
                            </button>
                            <button
                                type="button"
                                onClick={() => router.replace('/')}
                                className="block sm:hidden text-primary dark:text-primary-foreground text-2xl font-bold uppercase px-3 py-1">
                                MB
                            </button>
                        </>
                    )}
                </div>

                <ul
                    className="mt-4 h-screen max-h-0 w-full flex-col items-start text-sm hidden md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 lg:flex"
                    id="navbar-default">
                    <li className="mr-2">
                        <ModeToggle />
                    </li>
                    {routes.map((route) => (
                        <li key={route.label}>
                            <Button
                                variant={'outline'}
                                className="px-4 py-2 dark:bg-slate-800 mr-1"
                                onClick={() => {
                                    router.push(`/#${sectionIds[route.path]}`, {
                                        scroll: true,
                                    });
                                }}>
                                <div
                                    className={`transition-colors duration-300 hover:text-violet-500 font-semibold 
                                    ${
                                        ''
                                        // activeSection === route.path
                                        //     ? getNavLinkClass(activeSection)
                                        //     : 'dark:text-violet-300'
                                    }`}>
                                    {route.label}
                                </div>
                            </Button>
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
                                    className="mt-4 h-screen max-h-0 w-full flex-col items-start text-sm md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 lg:flex"
                                    id="navbar-mobile">
                                    {routes.map((route) => (
                                        <li key={route.label}>
                                            <SheetClose asChild>
                                                <Link
                                                    className="block px-4 py-2 no-underline outline-none hover:no-underline"
                                                    href={`/#${
                                                        sectionIds[route.path]
                                                    }`}>
                                                    <div
                                                        className={`dark:text-white transition-colors duration-300 hover:text-violet-500 font-semibold ${
                                                            ''
                                                            // activeSection ===
                                                            // route.path
                                                            //     ? 'text-primary border-b-2 border-b-primary'
                                                            // : ''
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
