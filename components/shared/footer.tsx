'use client';

import { linkData } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="border rounded-lg rounded-b-none p-4 md:p-8 lg:p-16">
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <h4 className="font-semibold underline underline-offset-4 mb-3">
                        Tap To Connect
                    </h4>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {linkData.map((l, i) => (
                            <Link
                                href={
                                    l.url.startsWith('masumbillah6584')
                                        ? `mailto:${l.url}`
                                        : l.url
                                }
                                target="_blank"
                                className="h-10 md:h-16 w-10 md:w-16 rounded-full border p-2"
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
