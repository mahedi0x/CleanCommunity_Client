import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { FaCamera, FaTasks, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import carousel1 from "../../assets/carousel1.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import { Link } from 'react-router';

const Carousel = () => {
  const slides = [
    {
      title: "Clean Streets,<br/><span class='text-green-500'>Bright Future.</span>",
      description: "Join 5,000+ citizens reporting civic issues daily. Your contribution turns a report into a cleaner reality.",
      primaryBtn: "Start Reporting",
      secondaryBtn: "How it Works",
      img: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
      title: "Your Voice Is<br/><span class='text-green-500'>The Solution.</span>",
      description: "From overflowing bins to broken lights—don't just walk past it. Snap it, Report it, and Track the progress.",
      primaryBtn: "View All Issues",
      secondaryBtn: "About Us",
      img: carousel1,
    },
    {
      title: "Your Voice Is<br/><span class='text-green-500'>The Solution.</span>",
      description: "From overflowing bins to broken lights—don't just walk past it. Snap it, Report it, and Track the progress.",
      primaryBtn: "View All Issues",
      secondaryBtn: "About Us",
      img: carousel3,
    },
  ];

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <Swiper
        effect="fade"
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 6000 }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full bg-cover bg-center object-scale-down " style={{ backgroundImage: `url(${slide.img})` }}>
              {/* Overlay: Darker on left for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>

              <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                {/* Status Tags */}
                <div className="flex gap-4 mb-8">
                  {[
                    { label: "Report", icon: FaCamera },
                    { label: "Track", icon: FaTasks },
                    { label: "Resolve", icon: FaCheckCircle }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-xl">
                      <item.icon className="text-green-400 text-xs" />
                      <span className="text-[10px] uppercase font-black tracking-widest text-white">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <h1
                  className="text-5xl md:text-8xl font-black text-white leading-[0.95] mb-6 uppercase italic tracking-tighter"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />

                <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-10 font-medium leading-relaxed">
                  {slide.description}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <Link to="/register" className="group flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-wider transition-all hover:-translate-y-1 shadow-2xl shadow-green-900/20">
                    {slide.primaryBtn}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/about" className="px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-black uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm">
                    {slide.secondaryBtn}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Style */}
      <style>{`
        .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
        .swiper-pagination-bullet-active { background: #22c55e !important; width: 25px !important; border-radius: 4px !important; opacity: 1; }
      `}</style>
    </div>
  );
};

export default Carousel;