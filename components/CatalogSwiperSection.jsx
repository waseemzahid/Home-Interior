'use client';
import { TbArrowUpRight } from "react-icons/tb"
import { Button } from "./ui/button"
import { motion } from 'framer-motion'

//Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import { desVariants, tagVariants, titleVariants } from "../utils/animation";

export default function CatalogSwiperSection () {
  return (
    <div className="py-8 lg:py-28">
        <div className="container grid pb-8 lg:grid-cols-1">
            <div className="text-left">
                <motion.h1
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">
                    Modern Classic
                </motion.h1>
                <motion.h2 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="uppercase pb-6 font-bold text-xl tracking-wider mt-5">
                    Luxury Decor to Create Comfort in Our Home
                </motion.h2>
            </div>
            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="grid grid-cols-2 text-gray-500 gap-x-8 text-lg">
                <p>
                With our passion for design and decor, we have curated a collection of furniture and accessories designed to elevate your living space. Whether you're looking to create a cozy retreat or a stylish modern home, our carefully selected pieces are crafted to blend comfort with elegance.
                </p>
                <p>
                Explore our range to discover how our furniture and accessories can transform your home into a place that reflects your unique style and enhances your everyday living experience. From functional essentials to statement pieces, each item is chosen with care to ensure quality and aesthetic appeal.
                </p>
            </motion.div>
            <a href="/gallery">
                <Button className='inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg
                 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2'>
                    View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
            </a>
        </div>

        {/* Swiper Section */}
        <Swiper
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false}}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <Image src="/images/swiper1.jpg" alt="swiper" width={520} height={220} className="w-full"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/swiper2.jpg" alt="swiper" width={520} height={220} className="w-full"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/swiper3.jpg" alt="swiper" width={520} height={220} className="w-full"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/swiper4.jpg" alt="swiper" width={520} height={220} className="w-full"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/swiper5.jpg" alt="swiper" width={520} height={220} className="w-full"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/swiper6.jpg" alt="swiper" width={520} height={220} className="w-full"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/swiper7.jpg" alt="swiper" width={520} height={220} className="w-full"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/swiper8.jpg" alt="swiper" width={520} height={220} className="w-full"/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}