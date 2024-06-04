import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/provider/theme-provider';
import Navbar from '@/components/shared/nav-bar';
import { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Masum Billah',
    description:
        'A web developer from Bangladesh. MERN stack developer & I am growing as a fullstack developer. Thank you',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-pt-24">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <main>
                        <div className="sticky top-0 z-50 glow-container backdrop-blur bg-[#101123] bg-opacity-85 h-20 rounded-b-lg">
                            <div className="absolute bottom-0 w-full">
                                <Navbar />
                            </div>
                        </div>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
