import React from 'react'
import aboutImage from '../assets/aboutImage.jpg'
import Image from 'next/image'
const progressbar = [
  { name: 'Air Transportation', percentage: '70%' },
  { name: 'Marine Transportation', percentage: '60%' },
  { name: 'Trucking Services', percentage: '95%' },
  { name: 'Safety Escort Services', percentage: '30%' },
]

const AboutUs = () => {
  return (
    <section className='lg:pt-36 pt-10'>
      <h1 className=' leading-8 font-extrabold tracking-tight  text-center text-[#1b1a1a] font-sans lg:text-4xl text-3xl  '>
        Who We Are
      </h1>
      <div className=' border-b-4 pt-4 border-indigo-500 max-w-[20%] lg:max-w-[10%] mx-auto' />
      <div className='lg:flex mx-auto lg:max-w-7xl max-w-xs md:max-w-lg pt-14'>
        <div className='w-full h-full'>
          <Image
            className='absolute'
            src={aboutImage}
            alt=''
            width='570px'
            height='378px'
          />
        </div>
        <div className=' font-normal font-sans text-[#706c6c] text-lg '>
          <p>
            Our transportation company with 30 years of experience is your best
            choice for shipping cargo of any size, storage, packing or
            delivering wares to your customers.
          </p>
          <br />
          <p>
            Our professional employees will take care of your goods, whenever
            you send them.
          </p>

          {progressbar.map((item) => (
            <div key={item.name} className='relative pt-2'>
              <div className='flex'>
                <span className='w-full'>{item.name}</span>
                <span>{item.percentage}</span>
              </div>
              <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200'>
                <div
                  style={{ width: item.percentage }}
                  className={` shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
