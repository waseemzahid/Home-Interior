'use client';
import { tagVariants, titleVariants } from '../utils/animation'
import Badge from './Badge'
import { motion } from 'framer-motion'

const CompanySection = () => {
  return (
    <div className="bg-primary dark:bg-tertiary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {/* Badge 1 */}
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={titleVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white leading-7 text-xl">Transaction every 24 hours</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={44} endCountText=" Million" />
            </dd>
          </motion.div>

          {/* Badge 2 */}
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={tagVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white leading-7 text-xl">Assets Under Running</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={119} endCountText=" Trillion" />
            </dd>
          </motion.div>

          {/* Badge 3 */}
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={tagVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white leading-7 text-xl">New Users Annually</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={45000} endCountText=" +" />
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  )
}

export default CompanySection
