import dynamic from 'next/dynamic';

const AnimationLottieClient = dynamic(() => import('./animation-lottie'), {
    ssr: false,
});

export default AnimationLottieClient;
