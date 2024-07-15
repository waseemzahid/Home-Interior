"use client";
import React from 'react'
import ContactSection from '../../components/ContactSection'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '../../utils/animation'

const page = () => {
  return (
    <>
    <motion.h1 
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
        className='text-4xl uppercase text-center tracking-wider font-bold mt-8 text-primary'>
          Our Gallery
    </motion.h1>
    <div className='container py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <motion.div 
      initial="offscreen"
      whileInView={"onscreen"}
      variants={desVariants}
      className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/badroom.jpg' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/gallery2.jpg' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/gallery.jpg' />
        </div>
      </motion.div>

      <motion.div 
      initial="offscreen"
      whileInView={"onscreen"}
      variants={tagVariants}
      className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/swiper1.jpg' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/gallery11.jpg' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/living.jpg' />
        </div>
      </motion.div>

      <motion.div 
      initial="offscreen"
      whileInView={"onscreen"}
      variants={desVariants}
      className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/gallery14.jpg' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/gallery15.jpg' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/gallery12.jpg' />
        </div>
      </motion.div>

      <motion.div 
      initial="offscreen"
      whileInView={"onscreen"}
      variants={titleVariants}
      className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/gallery7.jpg' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/gallery3.jpg' />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src='/images/gallery11.jpg' />
        </div>
      </motion.div>
    </div>
    <ContactSection />
    </>
  )
}

export default page