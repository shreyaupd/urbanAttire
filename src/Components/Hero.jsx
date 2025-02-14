import React from 'react';
import { Link } from 'react-router';
import heroimg from '../img/hero.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles and modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Hero = () => {
  console.log('Hero image path:', heroimg); // Debugging step

  return (
    <section 
      className="bg-cover bg-center bg-no-repeat h-[800px] flex flex-col items-center justify-center"
    >
      {/* Hero Content */}
      <div className="text-white text-center p-10 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-4xl font-bold">Welcome to Urban Attire</h1>
        <p className="mt-4">Discover the latest trends in fashion</p>
      </div>

      {/* Swiper Component */}
      <div className="w-full max-w-4xl mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={heroimg} alt="Fashion 1" className="w-full h-auto rounded-lg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroimg} alt="Fashion 2" className="w-full h-auto rounded-lg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroimg} alt="Fashion 3" className="w-full h-auto rounded-lg"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
