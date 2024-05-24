"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'


const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='lg:col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-black mb-4 text-4xl lg:text-6xl font-extrabold'>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#cd0b3c] via-[#ffcccc] to-[#ffeecc]'> Hello, I&apos;m{" "}
            </div>

            <TypeAnimation
              sequence={[
                
                'Victoria',
                1000, 
                'Full Stack Developer',
                1000,
                'English Teacher',
                1000,
                'English-Spanish Translator',
                1000
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
           
          </h1>
          <p className='text-black text-base sm:text-lg mb-6 lg:text-xl'>
  &quot;Nothing is impossible, the word itself says &apos;I&apos;m possible.&apos;&quot; — Audrey Hepburn
</p>

          <div className='flex flex-col lg:flex-row'>
            <Link href={'https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/'}>
            <button className='px-3 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-[#ffddcc] via-[#ffcccc] to-[#d01644] hover:bg-slate-200 text-white '>
              Hire Me
            </button>
            </Link>
            <Link href={'https://drive.google.com/file/d/1d48Z7nUTN8Sa5NLNWt1qAnZdvv-E5Fz7/view?usp=sharing'}>
            <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-r from-[#ffddcc] via-[#ffcccc] to-[#d01644] text-white border mt-3 lg:mt-0 transform transition-transform hover:scale-105'>
              <span className='block bg-[#ffefd1] text-black rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </Link>
          </div>
        </div>

        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>

          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-8 border-[#a72848] overflow-hidden'>
            <Image
              src='/ProfilePic.jpg'
              alt='portfolio'
              className='absolute left-0 top-0 w-full h-full object-cover'
              layout='fill'
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
