import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import heroimg from '../img/hero.jpg';
import heroimg1 from '../img/hero3.jpg';
import heroimg2 from '../img/hero2.jpg';
import heroimg3 from '../img/hero4.jpg';

const slides = [
  { img: heroimg, title: "Luxury Redefined", description: "Immerse yourself in timeless fashion." },
  { img: heroimg1, title: "Elegance in Motion", description: "Wear the trend, own the moment." },
  { img: heroimg2, title: "A Statement of Class", description: "Designed for those who dare to shine." },
  { img: heroimg3, title: "Beyond the Ordinary", description: "Step into a world of exclusivity." },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define colors for titles and descriptions based on slide index
  const titleColors = [
    'text-gray-500', // Slide 1 - Red
    'text-yellow-600', // Slide 2 - Blue
    'text-gray-300', // Slide 3 - Green
    'text-yellow-500', // Slide 4 - Yellow
  ];

  const descriptionColors = [
    'text-gray-700', // Slide 1 - Light Red
    'text-yellow-300', // Slide 2 - Light Blue
    'text-pink-200', // Slide 3 - Light Green
    'text-yellow-300', // Slide 4 - Light Yellow
  ];

  // Unique animations for each slide
  const titleAnimation = (index) => {
    switch (index) {
      case 0:
        return { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } };
      case 1:
        return { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 2:
        return { initial: { rotate: -10, opacity: 0 }, animate: { rotate: 0, opacity: 1 } };
      case 3:
        return { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 } };
      default:
        return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    }
  };

  const descriptionAnimation = (index) => {
    switch (index) {
      case 0:
        return { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } };
      case 1:
        return { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 2:
        return { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 3:
        return { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } };
      default:
        return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    }
  };

  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[900px] flex flex-col items-center justify-center overflow-hidden">
      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Swiper Component */}
      <div className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 800, disableOnInteraction: false }}
          speed={2000}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Image with Slow Zoom Effect */}
              <motion.img
                src={slide.img}
                alt={`Fashion ${index + 1}`}
                className="w-full h-[900px] object-cover transition-all duration-1000 ease-in-out"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Unique Animated Text for Each Slide */}
              {currentIndex === index && (
                <motion.div
                  className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-center z-10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                  {/* Title - Unique Animations per Slide */}
                  <motion.h1
                    className={`text-5xl font-semibold mb-3 tracking-wide drop-shadow-lg ${titleColors[index]}`}
                    initial={titleAnimation(index).initial}
                    animate={titleAnimation(index).animate}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Description - Unique Animations per Slide */}
                  <motion.p
                    className={`text-lg drop-shadow-md ${descriptionColors[index]}`}
                    initial={descriptionAnimation(index).initial}
                    animate={descriptionAnimation(index).animate}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
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
