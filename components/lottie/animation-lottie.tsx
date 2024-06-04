'use client';

import Lottie from 'lottie-react';

const AnimationLottie = ({ animationPath }: { animationPath: any }) => {
    return (
        <div>
            <Lottie
                animationData={animationPath}
                loop
                autoplay
                style={{
                    width: '95%',
                }}
            />
        </div>
    );
};

export default AnimationLottie;
