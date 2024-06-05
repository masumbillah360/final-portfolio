import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/provider/theme-provider';
import Navbar from '@/components/shared/nav-bar';
import { Toaster } from '@/components/ui/toaster';

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
        <html
            lang="en"
            className="scroll-pt-10 md:scroll-pt-24 lg:scroll-pt-30">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <main className="container mx-auto">
                        <div className="sticky top-0 z-50 backdrop-blur bg-opacity-95 h-20 rounded-b-lg">
                            <div className="absolute bottom-0 w-full">
                                <Navbar />
                            </div>
                        </div>
                        {children}
                    </main>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
