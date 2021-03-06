import React from 'react'
import { motion } from 'framer-motion'

import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
const Variants = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    opacity: 1,
    scale: [0.1, 1],
  },
}

const ContactUs = () => {
  return (
    <motion.section
      variants={Variants}
      initial='offscreen'
      whileInView='onscreen'
      className='min-h-screen bg-white'
    >
      <main className='overflow-hidden'>
        <div className='bg-warm-gray-50'>
          <div id='contact' className='py-24 lg:py-32'>
            <div className='relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8'>
              <h1 className='text-4xl text-center font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl'>
                Contact Us
              </h1>
              <div className=' border-b-4 pt-4 border-indigo-500 max-w-[35%] lg:max-w-[15%] mx-auto' />
              <p className='mt-6 text-center text-xl text-warm-gray-500 max-w-3xl mx-auto'>
                Vel nunc non ut montes, viverra tempor. Proin lectus nibh
                phasellus morbi non morbi. In elementum urna ut volutpat.
                Sagittis et vel et fermentum amet consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className='relative bg-white'
          aria-labelledby='contact-heading'
        >
          <div
            className='absolute w-full h-1/2 bg-warm-gray-50'
            aria-hidden='true'
          />

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='relative bg-white shadow-xl'>
              <h2 id='contact-heading' className='sr-only'>
                Contact us
              </h2>

              <div className='grid grid-cols-1 lg:grid-cols-3'>
                {/* Contact information */}
                <div className='relative overflow-hidden py-10 px-6 bg-gradient-to-b from-indigo-500 to-indigo-600 sm:px-10 xl:p-12'>
                  <h3 className='text-lg font-medium text-white'>
                    Contact information
                  </h3>
                  <p className='mt-6 text-base text-indigo-50 max-w-3xl'>
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                    volutpat massa dictumst amet. Sapien tortor lacus arcu.
                  </p>
                  <dl className='mt-8 space-y-6'>
                    <dt>
                      <span className='sr-only'>Phone number</span>
                    </dt>
                    <dd className='flex text-base text-indigo-50'>
                      <PhoneIcon
                        className='flex-shrink-0 w-6 h-6 text-indigo-200'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>+1 (555) 123-4567</span>
                    </dd>
                    <dt>
                      <span className='sr-only'>Email</span>
                    </dt>
                    <dd className='flex text-base text-indigo-50'>
                      <MailIcon
                        className='flex-shrink-0 w-6 h-6 text-indigo-200'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>support@workcation.com</span>
                    </dd>
                  </dl>
                  <ul className='mt-8 flex space-x-12' role='list'>
                    <li>
                      <a
                        className='text-indigo-200 hover:text-indigo-100'
                        href='#'
                      >
                        <span className='sr-only'>Facebook</span>
                        <svg
                          className='w-7 h-7'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fillRule='evenodd'
                            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-indigo-200 hover:text-indigo-100'
                        href='#'
                      >
                        <span className='sr-only'>GitHub</span>
                        <svg
                          className='w-7 h-7'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-indigo-200 hover:text-indigo-100'
                        href='#'
                      >
                        <span className='sr-only'>Twitter</span>
                        <svg
                          className='w-7 h-7'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 bg-slate-200'>
                  <h3 className='text-lg font-medium text-warm-gray-900'>
                    Send us a message
                  </h3>
                  <form
                    action='#'
                    method='POST'
                    className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                  >
                    <div>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-warm-gray-900'
                      >
                        First name
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='first-name'
                          id='first-name'
                          autoComplete='given-name'
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-warm-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-warm-gray-900'
                      >
                        Last name
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='last-name'
                          id='last-name'
                          autoComplete='family-name'
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-warm-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-warm-gray-900'
                      >
                        Email
                      </label>
                      <div className='mt-1'>
                        <input
                          id='email'
                          name='email'
                          type='email'
                          autoComplete='email'
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-warm-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between'>
                        <label
                          htmlFor='phone'
                          className='block text-sm font-medium text-warm-gray-900'
                        >
                          Phone
                        </label>
                        <span
                          id='phone-optional'
                          className='text-sm text-warm-gray-500'
                        >
                          Optional
                        </span>
                      </div>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='phone'
                          id='phone'
                          autoComplete='tel'
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-warm-gray-300 rounded-md'
                          aria-describedby='phone-optional'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='subject'
                        className='block text-sm font-medium text-warm-gray-900'
                      >
                        Subject
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='subject'
                          id='subject'
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-warm-gray-300 rounded-md'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <div className='flex justify-between'>
                        <label
                          htmlFor='message'
                          className='block text-sm font-medium text-warm-gray-900'
                        >
                          Message
                        </label>
                        <span
                          id='message-max'
                          className='text-sm text-warm-gray-500'
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className='mt-1'>
                        <textarea
                          id='message'
                          name='message'
                          rows={4}
                          className='py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-warm-gray-300 rounded-md'
                          aria-describedby='message-max'
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2 sm:flex sm:justify-end'>
                      <button
                        type='submit'
                        className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact grid */}
      </main>
    </motion.section>
  )
}

export default ContactUs
