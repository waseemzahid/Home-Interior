"use client"
import Link from 'next/link'
import { Input } from './ui/input'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '../utils/animation'

export default function Footer() {
  return (
    <div className="bg-tertiary">
      <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid lg:grid-cols-3 gap-8 pb-4 text-left lg:pb-0">
          <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}>
            <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                About Us
              </Link>
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Press
              </Link>
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Career
              </Link>
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Contact
              </Link>
            </div>
          </motion.div>

          <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}>
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Development
            </h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Documentation
              </Link>
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Reference
              </Link>
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Changelog
              </Link>
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Status
              </Link>
            </div>
          </motion.div>

          <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}>
            <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Instagram
              </Link>
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Twitter
              </Link>
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                LinkedIn
              </Link>
              <Link href="/" className="py-1 hover:underline hover:text-primary">
                Facebook
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}>
          <p className="pb-4 text-xl font-semibold">Stay Updated</p>
          <div className="relative lg:max-w-sm">
            <Input type="name" id="first name" placeholder="Email Address" />
            <button
              className="absolute bg-black text-white rounded-full h-12 px-5 text-sm top-1 right-1 hover:border-2
             hover:border-white hover:bg-primary dark:bg-primary dark:hover:bg-black"
            >
              Subscribe
            </button>
          </div>
          <p className='pt-4 text-gray-600'>By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.</p>
        </motion.div>
      </div>

      <motion.div 
      initial="offscreen"
      whileInView={"onscreen"}
      variants={desVariants}
      className='py-7 bg-black dark:bg-primary'>
        <div className='container text-white text-center lg:justify-between lg:flex'>
          <div className='pb-4 lg:pb-0'>
            <p>&copy; 2024 Interior, All Rights Reserved</p>
          </div>
          <div>
            <Link href='/' className="p-4 hover:underline hover:text-primary">Privacy Terms</Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
