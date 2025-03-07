import Image from 'next/image';
import React from 'react';
import SearchBox from '../../Helper/searchBox';

const Hero = () => {
  return (
    <div className='relative w-full h-[160vh] sm:h-[100vh]'>
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>
      <Image
        src='/images/hero.jpg'
        width={1920}
        height={1080}
        alt="Hero Background"
        className='w-full h-full object-cover'
        priority
      />
      <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex items-center justify-center flex-col w-full h-full'>
          <div>
            <h1 className='text-[25px] mt-8 mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase'>See The World For Less</h1>
            <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>Get the best prices on 2,000,000+ tickets available</p>
          </div>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;