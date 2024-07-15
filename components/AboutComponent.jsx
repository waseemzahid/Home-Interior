'use client';
import Image from 'next/image'
import { desVariants, tagVariants, titleVariants } from '../utils/animation'
import { motion } from 'framer-motion'

const AboutComponent = () => {
  return (
    <div className='container py-12 xl:py-24 h-auto'>
    <div className='grid lg:grid-cols-2 place-items-center'>
        {/* Content section */}
        <div className='lg:order-2'>
            <div className='items-center'>
                <motion.h2 
                    initial="offscreen"
                    whileInView={'onscreen'}
                    variants={titleVariants}
                    className='px-12 py-4 text-4xl font-extrabold leading-tight lg:text-5xl'>
                    We are award Winning Company
                </motion.h2>
                <motion.p 
                    initial="offscreen"
                    whileInView={'onscreen'}
                    variants={desVariants}
                    className='px-12 tracking-wider uppercase text-gray-400 mt-3 text-xl'>
                    World Award
                </motion.p>
                <motion.p 
                    initial="offscreen"
                    whileInView={'onscreen'}
                    variants={tagVariants}
                    className='px-12 pb-4 mt-4 text-lg'>
                    With a deep-rooted expertise in interior design, we are dedicated to crafting extraordinary living spaces that reflect your unique style and preferences. Our team of trusted professionals has earned a stellar reputation for delivering exceptional results, tailored to meet the diverse needs of homeowners worldwide. From conceptualization to execution, we ensure every detail is meticulously curated to create environments that inspire and delight.
                </motion.p>
                <motion.p 
                    initial="offscreen"
                    whileInView={'onscreen'}
                    variants={tagVariants}
                    className='px-12 pb-4 text-lg'>
                    Our commitment to excellence is underscored by numerous prestigious awards garnered from around the globe. These accolades not only recognize our innovative approach and attention to detail but also validate our unwavering dedication to exceeding client expectations. Whether you seek timeless elegance, modern sophistication, or personalized comfort, our award-winning designs transform houses into cherished homes.
                </motion.p>
            </div>
        </div>
        {/* Image section */}
        <div className='lg:order-1'>
            <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={titleVariants}
            className='pl-10 sm:px-2'>
            <Image 
                src='/images/aboutfront.png' 
                width={900}
                height={500}
                alt='aboutimg'
            />
            </motion.div>
        </div>
    </div>
    </div>
  )
}

export default AboutComponent