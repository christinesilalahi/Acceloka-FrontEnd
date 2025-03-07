import React from 'react'
import Hero from './Hero/hero';
import Hotel from './Hotel/hotel';
import WhyChooseUs from './WhyChooseUs/whyChooseUs';

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <Hotel />
        <WhyChooseUs />
    </div>
  )
}

export default Home;