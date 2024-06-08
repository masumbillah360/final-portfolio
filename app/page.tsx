'use client';
import AboutSection from '@/components/sections/about';
import Blog from '@/components/sections/blog';
import ContactSection from '@/components/sections/contact';
import Education from '@/components/sections/education';
import Experience from '@/components/sections/experience';
import HeroSection from '@/components/sections/hero-section';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import { Suspense, useEffect, useState } from 'react';
import Loader from '../components/loader';

export default function Home() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return <Loader />;
    }
    console.log('object');
    return (
        <>
            <div id="home">
                <Suspense fallback={null}>
                    <HeroSection />
                    <AboutSection />
                </Suspense>
            </div>
            <div id="experience">
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </div>
            <div id="skills">
                <Suspense fallback={null}>
                    <Skills />
                </Suspense>
            </div>
            <div id="projects">
                <Suspense fallback={null}>
                    <Projects />
                </Suspense>
            </div>
            <div id="education">
                <Suspense fallback={null}>
                    <Education />
                </Suspense>
            </div>
            <div id="blogs">
                <Suspense fallback={null}>
                    <Blog />
                </Suspense>
            </div>
            <div id="contact">
                <Suspense fallback={null}>
                    <ContactSection />
                </Suspense>
            </div>
        </>
    );
}
