import MoreSection from "./MoreSection/MoreSection";
import PopularClassSec from "./PopularClassSec/PopularClassSec";
import PopularTeacher from "./PopularTeacher/PopularTeacher";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider />
            <PopularClassSec />
            <PopularTeacher />
            <MoreSection />

        </div>
    );
};

export default Home;