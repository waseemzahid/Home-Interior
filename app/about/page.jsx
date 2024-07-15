"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import { Button } from '../../components/ui/button'
import { TbArrowUpRight } from 'react-icons/tb'
import { motion, useScroll, useTransform } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '../../utils/animation'
import ContactSection from '../../components/ContactSection';

const page = () => {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
  return (
    <div>
      <div className="bg-[url('/images/whoweare.jpg')] bg-center bg-cover">
        <h1 className='container py-32 text-6xl font-semibold text-gray-700 tracking-widest text-center lg:py-52'>Who we are?</h1>
      </div>
      <div className='container'>
        <div className='pt-4'>
          <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl text-primary'>We have great idea & Interior Design</motion.h2>
          <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className='text-2xl text-center font-medium pb-10 mt-5'>
          Our interior design company is a company that provides interior design services for homes, offices, apartments, and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
          </motion.p>
        </div>

      {/* About Section */}
        <motion.div 
        style= {{scale}}
        ref={ref}
        className='items-center lg:flex gap-x-8'>
          <div className='w-full'>
            <Image src="/images/gallery1123.jpg" width={700} height={700} />
          </div>
          <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}>
            <p className='pb-8 tracking-wide mt-6'>
              We are an international group of architects who believe it's crucial to rethink architectural education. At Confluence, we integrate new societal visions with innovative methods and contemporary tools, enhancing creativity, production, and communication in architecture. Our goal is to prepare future architects to meet modern demands with critical and creative thinking.<br /><br />
              To exemplify this approach, I designed and handcrafted an unfolding box for my year two architecture portfolio. This unique box serves as a practical container and a symbol of the innovative thinking we champion at Confluence. It offers an engaging and dynamic presentation, combining traditional craftsmanship with modern design principles, showcasing the importance of creativity and precision in architecture.<br /><br />
            <span className='text-xl font-extrabold tracking-tight text-primary'>
              The backpiperARCH, we share a belief in the transformational power of people united in a common purpose.
            </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Read More <TbArrowUpRight className='w-5 h-5 ml-2' />
            </Button>
          </motion.div>
        </motion.div>

      {/* Team Section */}
      <div className='lg:py-20'>
        <div className='pt-8 pb-4'>
          <motion.h1 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='text-4xl uppercase text-center tracking-wider font-bold'>Our Team</motion.h1>
        </div>

        {/* <div className='grid py-8 gap-20 lg:grid-cols-3'> */}
        <div className='grid py-8 gap-10 sm:gap-12 md:gap-16 lg:gap-20 lg:grid-cols-3'>
          <motion.div 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='border-2 border-primary'>
            <div className='p-4 text-center bg-gray-100 sm:aspect-square dark:bg-tertiary -m-0.5
            transition hover:-translate-y-3 hover:-translate-x-3'>
              <Image src="/images/profile2.jpg" width={200} height={200} alt='' className='mx-auto rounded-full' />
              <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
              <p className='text-sm'>
              Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
              </p> 
            </div>
          </motion.div>

          <motion.div 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className='border-2 border-primary'>
            <div className='p-4 text-center bg-gray-100 sm:aspect-square dark:bg-tertiary -m-0.5
            transition hover:-translate-y-3 hover:-translate-x-3'>
              <Image src="/images/profile1.jpg" width={200} height={200} alt='' className='mx-auto rounded-full' />
              <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
              <p className='text-sm'>
              Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
              </p> 
            </div>
          </motion.div>

          <motion.div 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className='border-2 border-primary'>
            <div className='p-4 text-center bg-gray-100 sm:aspect-square dark:bg-tertiary -m-0.5
            transition hover:-translate-y-3 hover:-translate-x-3'>
              <Image src="/images/profile3.jpg" width={200} height={200} alt='' className='mx-auto rounded-full' />
              <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
              <p className='text-sm'>
              Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
              </p> 
            </div>
          </motion.div>
        </div>
      </div>
      </div>
      <ContactSection />
  </div>
  )
}

export default page