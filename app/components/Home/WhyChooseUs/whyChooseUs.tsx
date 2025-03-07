import SectionHeading from '@/app/components/Helper/sectionHeading';
import React from 'react'
import WhyChooseCard from './whyChooseCard';

const WhyChooseUs = () => {
  return (
    <div className='pt-10 pb-24'>
        <SectionHeading heading='Why Choose Us' />
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
            <div>
                <WhyChooseCard image='/images/c1.svg' title='Best Price Guarantee' />
            </div>
            <div>
                <WhyChooseCard image='/images/c2.svg' title='Easy & Quick Booking' />
            </div>
            <div>
                <WhyChooseCard image='/images/c3.svg' title='Customer Care 24/7' />
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs;