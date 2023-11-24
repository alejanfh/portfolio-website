'use client'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in{' '}
        <span className='font-medium'>Computer Science</span>, I decided to
        specialize in{' '}
        <span className='font-medium'>front-end web development</span> within
        the realm of software development.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className='font-medium'>React, Next.js, HTML and CSS</span>. I
        am also familiar with TypeScript and JavaScript. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className='italic'>Beyond work</span>, my love for cinema, video
        games and modern board games fuels my creativity, directly impacting my
        approach to <span className='font-medium'>web development.</span> These
        passions inspire{' '}
        <span className='font-medium'>fresh perspectives,</span> while my keen
        interest in investment sharpens my undestanding of{' '}
        <span className='font-medium'>technology-business landscape</span>
        shaping my strategic approach to web projects.
      </p>
    </motion.section>
  )
}
