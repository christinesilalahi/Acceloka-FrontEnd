import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-12'>
        <div className='pt-15 pb-10 flex items-center justify-center flex-col bg-[#a7b7d7]'>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blogs</p>
            </div>

            {/* 2nd part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Contact Us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Privacy Policy</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Tems & Condition</p>
            </div>

            {/* 3rd part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Tour List</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Flight Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Travel Agent</p>
            </div>

            {/* 4th part */}
            <div>
                <h1 className='text-lg font-bold'>Contact Us</h1>
                <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                    <h1 className='text-base font-bold text-blue-950 mt-1'>+62 812 3456 7890</h1>
                </div>
                <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Email</h1>
                    <h1 className='text-base font-bold text-blue-950 mt-1'>cs@acceloka.com</h1>
                </div>
            </div>
        </div>

        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>Copyright &copy; 2025 Acceloka. All rights reserved.</p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Follow us </span>
                <Link href='#' className='text-gray-500 hover:text-gray-800'><FaTwitter/></Link>
                <Link href='#' className='text-gray-500 hover:text-gray-800'><FaInstagram/></Link>
                <Link href='#' className='text-gray-500 hover:text-gray-800'><FaTiktok/></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer