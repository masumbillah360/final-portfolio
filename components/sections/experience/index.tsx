import Image from 'next/image';
// import { BsPersonWorkspace } from 'react-icons/bs';

// import experience from '@/public/lottie/code.json';

// import AnimationLottieNoSSR from '@/components/helper/animation-lottie-client';
import { experienceData } from '@/constants/experience-data';
import { Fragment } from 'react';
import Titlebar from '@/components/title-bar';

function Experience() {
    return (
        <div id="experience" className="relative z-40 min-h-screen">
            <Titlebar title="Experience" />
        </div>
    );
}

export default Experience;
