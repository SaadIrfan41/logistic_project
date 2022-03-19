import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import heroImage2 from '../assets/heroImage2.jpg'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
  { name: 'Pricing', href: '#pricing' },
]

const HeroSection = () => {
  return (
    <div className='relative bg-gray-800  lg:h-screen md:h-[70vh]  '>
      <Image className='absolute' src={heroImage2} alt='' layout='fill' />
      <div className='relative pt-6 pb-16 sm:pb-24'>
        <Popover>
          {({ open }) => (
            <>
              <nav
                className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
                aria-label='Global'
              >
                <div className='flex items-center flex-1'>
                  <div className='flex items-center justify-between w-full md:w-auto'>
                    <a href='#'>
                      <span className='sr-only'>Workflow</span>
                      <img
                        className='h-8 w-auto sm:h-10'
                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                        alt=''
                      />
                    </a>
                    <div className='-mr-2 flex items-center md:hidden'>
                      <Popover.Button className='bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                        <span className='sr-only'>Open main menu</span>
                        <MenuIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='hidden space-x-10 md:flex md:ml-10 sm:flex justify-end w-full'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>

              <Transition
                show={open}
                as={Fragment}
                enter='duration-150 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Popover.Panel
                  focus
                  static
                  className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
                >
                  <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                    <div className='px-5 pt-4 flex items-center justify-between'>
                      <div>
                        <img
                          className='h-8 w-auto'
                          src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                          alt=''
                        />
                      </div>
                      <div className='-mr-2'>
                        <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Close menu</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <main className='mt-16 sm:mt-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='xl:grid xl:grid-cols-12 xl:gap-8'>
              <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center  '>
                <div className='md:mt-60 xl:mt-56 '>
                  <h1
                    className=' 
                    text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:text-5xl xl:text-6xl '
                  >
                    <span className='md:block'>The Best Logistics</span>{' '}
                    <span className='text-indigo-400 md:block'>
                      Service Provider
                    </span>
                  </h1>
                  <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    We are a flexible and dedicated Logistics Service Partner.
                    We work with you to design custom solutions that add value
                    to your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default HeroSection
