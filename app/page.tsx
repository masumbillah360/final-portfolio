import AboutSection from '@/components/sections/about';
import Blog from '@/components/sections/blog';
import ContactSection from '@/components/sections/contact';
import Education from '@/components/sections/education';
import Experience from '@/components/sections/experience';
import HeroSection from '@/components/sections/hero-section';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Blog />
            <ContactSection />
        </>
    );
}
