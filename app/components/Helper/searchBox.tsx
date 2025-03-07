'use client';

import { useState } from 'react';
import { BiCategory, BiRename } from 'react-icons/bi';
import { CiBarcode } from 'react-icons/ci';
import { FaCalendarWeek } from 'react-icons/fa';
import { IoMdPricetags } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    categoryName: '',
    ticketCode: '',
    ticketName: '',
    price: '',
    minEventDate: '',
    maxEventDate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams(
      Object.entries(searchParams).filter(([, value]) => value !== '')
    ).toString();    
    router.push(`/searchResult?${queryParams}`);
  };

  return (
    <div className='bg-white rounded-lg p-8 flex flex-wrap items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
      <div className='flex items-center space-x-6'>
        <BiCategory className='w-6 h-6 text-blue-600 flex-shrink-0' />
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>Category</p>
          <input
            type="text"
            name="categoryName"
            placeholder="Input the category"
            value={searchParams.categoryName}
            onChange={handleInputChange}
            className='outline-none border-none placeholder:text-gray-800'
          />
        </div>
      </div>

      <div className='flex items-center space-x-6'>
        <CiBarcode className='w-6 h-6 text-blue-600 flex-shrink-0' />
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>Ticket Code</p>
          <input
            type="text"
            name="ticketCode"
            placeholder="Input the ticket code"
            value={searchParams.ticketCode}
            onChange={handleInputChange}
            className='outline-none border-none placeholder:text-gray-800'
          />
        </div>
      </div>

      <div className='flex items-center space-x-6'>
        <BiRename className='w-6 h-6 text-blue-600 flex-shrink-0' />
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>Ticket Name</p>
          <input
            type="text"
            name="ticketName"
            placeholder="Input the ticket name"
            value={searchParams.ticketName}
            onChange={handleInputChange}
            className='outline-none border-none placeholder:text-gray-800'
          />
        </div>
      </div>

      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='w-6 h-6 text-blue-600 flex-shrink-0' />
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
          <input
            type="text"
            name="minEventDate"
            placeholder="Input the start date"
            value={searchParams.minEventDate}
            onChange={handleInputChange}
            className='outline-none border-none placeholder:text-gray-800'
          />
        </div>
      </div>

      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='w-6 h-6 text-blue-600 flex-shrink-0' />
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
          <input
            type="text"
            name="maxEventDate"
            placeholder="Input the end date"
            value={searchParams.maxEventDate}
            onChange={handleInputChange}
            className='outline-none border-none placeholder:text-gray-800'
          />
        </div>
      </div>

      <div className='flex items-center space-x-6'>
        <IoMdPricetags className='w-6 h-6 text-blue-600 flex-shrink-0' />
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>Price</p>
          <input
            type="number"
            name="price"
            placeholder="Input the price"
            value={searchParams.price}
            onChange={handleInputChange}
            className='outline-none border-none placeholder:text-gray-800'
          />
        </div>
      </div>

      <button
        onClick={handleSearch}
        className='rounded px-14 md:px-28 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300'
      >
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
        <span className='relative font-bold'>Search</span>
      </button>
    </div>
  );
};

export default SearchBox;