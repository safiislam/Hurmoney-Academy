import animImg from '../../public/Animation - 1703254750743.json';
import Lottie from "lottie-react";
const AnimationImg = () => {
    return (
        <div className='w-full h-full'>
            <Lottie animationData={animImg} loop={true} />
        </div>
    );
};

export default AnimationImg;