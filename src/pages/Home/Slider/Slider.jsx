import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className="z-0">
            <Carousel >
                <div className="md:h-screen relative">
                    <img src="https://i.ibb.co/2qFhDkx/pexels-dmitry-demidov-3783471.jpg" />
                    <div className=" text-white text-3xl absolute top-14 md:top-1/2 left-3 md:left-12 ">
                        <p className=" md:text-5xl font-bold text-left ">Melodic Carousel <br /> Symphony.</p>
                        <p className="text-left"><small>Igniting Passion, Nurturing Talent, and Crafting Musical Excellence for Aspiring Musicians.</small></p>
                    </div>
                </div>
                <div className="h-screen relative">
                    <img src="https://i.ibb.co/8dk7kYh/pexels-do-the-lan-1293551.jpg" />
                    <div className="text-white text-3xl absolute top-14 md:top-1/2 left-3 md:left-12">
                        <p className=" md:text-5xl font-bold  text-left ">Spinning Musical <br /> Excellence.</p>
                        <p className="text-left"><small>Inspiring Creativity, Elevating Skills, Enriching Musical Journeys.</small></p>
                    </div>
                </div>
                <div className="h-screen">
                    <img src="https://i.ibb.co/19tPrXh/pexels-cottonbro-studio-3944091.jpg" />
                    <div className="text-white text-3xl absolute top-14 md:top-1/2 left-3 md:left-12">
                        <p className=" md:text-5xl font-bold text-left ">Carousel of Harmonious <br /> Melodies</p>
                        <p className="text-left"><small>Fostering Talent, Cultivating Artistry, and Embracing the Power of Harmony</small></p>
                    </div>
                </div>

            </Carousel>

        </div>
    );
};

export default Slider;