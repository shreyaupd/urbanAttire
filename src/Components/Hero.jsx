import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import heroimg from "../Img/hero.jpg";
import heroimg1 from "../Img/hero3.jpg";
import heroimg2 from "../Img/hero2.jpg";
import heroimg3 from "../Img/hero4.jpg";

const slides = [
  {
    img: heroimg,
    title: "Luxury Redefined",
    description: "Immerse yourself in timeless fashion.",
  },
  {
    img: heroimg1,
    title: "Elegance in Motion",
    description: "Wear the trend, own the moment.",
  },
  {
    img: heroimg2,
    title: "A Statement of Class",
    description: "Designed for those who dare to shine.",
  },
  {
    img: heroimg3,
    title: "Beyond the Ordinary",
    description: "Step into a world of exclusivity.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Improved animations for each slide
  const titleAnimation = {
    initial: { opacity: 0, y: -20, scale: 2 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const descriptionAnimation = {
    initial: { opacity: 0, y: 20, scale: 1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  };
  return (
<section className="relative bg-cover bg-center bg-no-repeat -top-20 h-[600px] md:h-[700px] lg:h-[900px] flex flex-col items-center justify-center overflow-hidden mt-0 pt-0">

  {/* Swiper Component */}
  <div className="w-full z-10 relative"> {/* ensure swiper below input */}
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      speed={800}
      onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <motion.div
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-[600px] md:h-[700px] lg:h-[900px] overflow-hidden"
          >
            <motion.img src={slide.img} className="w-full h-full object-cover" />
          </motion.div>

          {currentIndex === index && (
            <motion.div
              className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-center z-10 sm:px-6 md:px-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl sm:text-3xl font-semibold mb-3 tracking-wide drop-shadow-lg text-white"
                initial={titleAnimation.initial}
                animate={titleAnimation.animate}
                transition={titleAnimation.transition}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-white text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md"
                initial={descriptionAnimation.initial}
                animate={descriptionAnimation.animate}
                transition={descriptionAnimation.transition}
              >
                {slide.description}
              </motion.p>
            </motion.div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
};

export default Hero;
