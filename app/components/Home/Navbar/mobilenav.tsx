import Link from 'next/link';
import React from 'react'
import { CgClose } from 'react-icons/cg';

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const Mobilenav = ({showNav, closeNav}:Props) => {

    const navOpen = showNav?"translate-x-0":"translate-x-[-100%]";

    const categoryMapping = {
        Movies: 'Cinema',
        Hotels: 'Hotel',
        Trains: 'Kereta',
        Bus: 'Transportasi-Darat',
        Ferry: 'Transportasi-Laut',
        Flights: 'Transportasi-Udara',
    };

  return (
    <div>
        <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
            {Object.entries(categoryMapping).map(([displayName, urlName]) => (
                <Link href={`/categories/${urlName}`} key={urlName}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right">
                    {displayName}
                </p>
                </Link>
            ))}
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
        </div>

    </div>
  )
}

export default Mobilenav;