import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { SpeedInsights } from '@vercel/speed-insights/next';

import { ThemeProvider } from '@/components/provider/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import Navbar from '@/components/shared/nav-bar';
import Footer from '@/components/shared/footer';

import './globals.css';

const font = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

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
        <html
            lang="en"
            className="scroll-pt-10 md:scroll-pt-24 lg:scroll-pt-30" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <main className="px-1 md:px-0 md:container mx-auto">
                        <div className="sticky top-0 z-50 backdrop-blur h-20 rounded-b-lg">
                            <div className="absolute bottom-0 w-full">
                                <Navbar />
                            </div>
                        </div>
                        {children}
                    </main>
                    <Toaster />
                </ThemeProvider>
                <Footer />
                <SpeedInsights />
            </body>
        </html>
    );
}
