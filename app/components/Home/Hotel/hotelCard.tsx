import Image from 'next/image';
import React from 'react'

type Props = {
    hotel: {
        id: number;
        image: string;
        name: string;
        location: string;
        rating: number;
        reviews: string;
        price: string;
    };
};

const HotelCard = ({hotel}: Props) => {
  return (
    <div>
        <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
            <div className='absolute inset-0 bg-black opacity-20 z-10'></div>
            <Image src={hotel.image} alt={hotel.name} width={500} height={500} className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' />
        </div>
        <div>
            <h1 className='mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200'>{hotel.name}</h1>
            <p className='mt-3 text-gray-700 font-medium'>Starting from <span className='text-blue-600 font-bold'>US${hotel.price}</span></p>
        </div>
    </div>
  )
}

export default HotelCard;