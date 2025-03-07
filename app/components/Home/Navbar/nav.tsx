"use client";

import Link from 'next/link';
import { HiBars3BottomRight, HiTicket } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {

    const categoryMapping = {
        Movies: 'Cinema',
        Hotels: 'Hotel',
        Trains: 'Kereta',
        Bus: 'Transportasi-Darat',
        Ferry: 'Transportasi-Laut',
        Flights: 'Transportasi-Udara',
    };

  return (
    <div className="bg-blue-950 shadow-md transition-all duration-200 h-[12vh] z-[1000] fixed w-full">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[90%] mx-auto">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
              <HiTicket className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl text-white uppercase font-bold">Acceloka</h1>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          {Object.entries(categoryMapping).map(([displayName, urlName]) => (
            <Link href={`/categories/${urlName}`} key={urlName}>
              <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right">
                {displayName}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
            <Link href="/my-ticket">
                <button className="md:px-10 md:py-2 px-6 py-1.5 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer">
                    My Ticket
                </button>
            </Link>
            <HiBars3BottomRight
                onClick={openNav}
                className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
        </div>
      </div>
    </div>
  );
};

export default Nav;