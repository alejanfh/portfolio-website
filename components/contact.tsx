'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import { toast } from 'sonner'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    // min(100%, 38rem) pick the smaller of this
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-3'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:alejanfh@gmail.com'>
          alejanfh@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success('Email sent successfully')
        }}
        className='mt-10 flex flex-col'
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack'
          type='email'
          name='senderEmail'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4'
          name='message'
          required
          maxLength={5000}
          placeholder='Your message'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
