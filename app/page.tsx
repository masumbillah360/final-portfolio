import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about';

import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Blog from '@/components/sections/blog';
import ContactSection from '@/components/sections/contact';

export default function Home() {

    return (
        <>
            <div id="home">
                <HeroSection />
                <AboutSection />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="education">
                <Education />
            </div>
            <div id="blogs">
                <Blog />
            </div>
            <div id="contact">
                <ContactSection />
            </div>
        </>
    );
}
