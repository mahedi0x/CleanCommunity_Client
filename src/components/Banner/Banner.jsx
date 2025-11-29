import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Icon Imports
import { FaCamera, FaTasks, FaCheckCircle } from 'react-icons/fa';

import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";

const Carousel = () => {
  const slides = [
    {
      title: "MAKE YOUR CITY <br /> CLEANER & SAFER",
      description:
        "Report local issues like overflowing garbage, broken infrastructure, or illegal dumping. Together, we can make a difference.",
      primaryButtonText: "REPORT AN ISSUE",
      primaryButtonLink: "/report",
      secondaryButtonText: "HOW IT WORKS",
      secondaryButtonLink: "/how-it-works",
      image: carousel1,
      imageAlt: "A clean city street with a garbage truck",
    },
    {
      title: "YOUR VOICE, <br /> OUR PRIORITY",
      description:
        "Every report is a step towards a better community. Track the progress of your submissions and see real change unfold.",
      primaryButtonText: "VIEW ALL ISSUES",
      primaryButtonLink: "/issues",
      secondaryButtonText: "ABOUT CLEANBD",
      secondaryButtonLink: "/about",
      image: carousel2,
      imageAlt: "Community park being cleaned by volunteers",
    },
    {
      title: "JOIN THE MOVEMENT <br /> FOR A BETTER BANGLADESH",
      description:
        "CleanBD empowers citizens to easily report and resolve civic issues. Let's build a more sustainable and livable environment.",
      primaryButtonText: "GET INVOLVED",
      primaryButtonLink: "/register",
      secondaryButtonText: "CONTACT US",
      secondaryButtonLink: "/contact",
      image: carousel3,
      imageAlt: "Clean urban street with modern architecture",
    },
  ];

  const featureBoxes = [
    {
      text: "Report It",
      icon: FaCamera,
      color: "text-black-400",
      bgColor: "bg-white/70",
    },
    {
      text: "Track It",
      icon: FaTasks,
      color: "text-orange-400",
      bgColor: "bg-white/70",
    },
    {
      text: "Get it Solved",
      icon: FaCheckCircle,
      color: "text-blue-400",
      bgColor: "bg-white/70",
    },
  ];

  return (
    <div className="relative w-full h-[650px] md:h-[750px] overflow-hidden">
      <Swiper
      
        spaceBetween={0}
        centeredSlides={true}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper w-full h-full"
        >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 "></div>

              {/* Content */}
              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white  p-20">
                <h1
                  className="text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight drop-shadow-lg"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />

                <p className="mt-6 mb-8 text-lg sm:text-xl font-light max-w-2xl mx-auto">
                  {slide.description}
                </p>

                {/* Feature Boxes */}
                <div className="flex flex-wrap justify-center gap-4 mb-10 mt-8 ">
                  {featureBoxes.map((box, boxIndex) => (
                    <div
                      key={boxIndex}
                      className={`${box.bgColor}  flex items-center justify-center 
                      px-5 py-3 rounded-lg shadow-md transition-all duration-300
                      hover:bg-white/80 hover:scale-105 text-black w-[200px]`}
                    >
                      <box.icon size={25} className={`mr-2 ${box.color}`} />
                      <p className="font-semibold text-base ">{box.text}</p>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={slide.primaryButtonLink}
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg
                    hover:bg-green-700 transition-all duration-300 shadow-lg"
                  >
                    {slide.primaryButtonText}
                  </a>

                  <a
                    href={slide.secondaryButtonLink}
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg
                    hover:bg-white hover:text-green-800 transition-all duration-300 shadow-lg"
                  >
                    {slide.secondaryButtonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
