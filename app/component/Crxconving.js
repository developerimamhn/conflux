'use client'

import React, {useState} from 'react';
import numbeingss1 from './image/numbeingss1.png';
import Image from 'next/image';
import Link from 'next/link';

const Crxconving = () => {
    const [activeLink, setActiveLink] = useState('/buy'); 
        const [isOpen, setIsOpen] = useState(false);
        const [selectedCrypto, setSelectedCrypto] = useState({
            image: numbeingss1,
            name: 'BNB',
        });
    
        const options = [
            { image: numbeingss1, name: 'CRX' },
            { image: numbeingss1, name: 'CXX' },
            { image: numbeingss1, name: 'CNX' },
            { image: numbeingss1, name: 'CRX' },
        ];
    
        const toggleDropdown = () => {
            setIsOpen((prev) => !prev);
        };
    
        const handleSelect = (crypto) => {
            setSelectedCrypto(crypto);
            setIsOpen(false);
        };
        
        
        // Default to "/buy"
    
        const handleLinkClick = (href) => {
            setActiveLink(href); 
        };
    return (
        <div className='w-full'>
            <div className='w-full'>
                <p className='howmat text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[12.533px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[18.8px] pb-[6px] md:pb-[7px] 2xl:pb-[9.4]'>How much BNB you need to pay:</p>
                <div className='flex items-center justify-between w-full bordering py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13px] xl:py-[14px] 2xl:py-[15px] px-[12px] sm:px-[13px] md:px-[14px] lg:px-[15px] xl:px-[16px] 2xl:px-[18px]'>
                    <input className='outline-none w-full ngasings text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]' type='mail' placeholder='0'/>
                    <div className="crypto-selector">
                    <div
                        className="flex items-center gap-[10px] cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        <Image
                            className="w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[25px]"
                            src={selectedCrypto.image}
                            alt={`${selectedCrypto.name} Icon`}
                            width={25}
                            height={25}
                        />
                        <p className="ngasings text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                            {selectedCrypto.name}
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M2.93056 5.15807L7.61556 9.76907C7.71779 9.8702 7.85577 9.92692 7.99956 9.92692C8.14336 9.92692 8.28134 9.8702 8.38356 9.76907L13.0686 5.15907C13.1714 5.05799 13.3099 5.00136 13.4541 5.00136C13.5983 5.00136 13.7367 5.05799 13.8396 5.15907C13.8902 5.20845 13.9305 5.26746 13.9579 5.33264C13.9854 5.39781 13.9996 5.46783 13.9996 5.53857C13.9996 5.6093 13.9854 5.67932 13.9579 5.7445C13.9305 5.80968 13.8902 5.86869 13.8396 5.91807L9.15556 10.5281C8.84704 10.831 8.43194 11.0007 7.99956 11.0007C7.56719 11.0007 7.15209 10.831 6.84356 10.5281L2.15956 5.91807C2.10876 5.86868 2.06838 5.8096 2.04081 5.74433C2.01323 5.67906 1.99902 5.60892 1.99902 5.53807C1.99902 5.46721 2.01323 5.39708 2.04081 5.33181C2.06838 5.26654 2.10876 5.20746 2.15956 5.15807C2.26242 5.05699 2.40086 5.00036 2.54506 5.00036C2.68927 5.00036 2.82771 5.05699 2.93056 5.15807Z"
                                fill="#D0D1E3"
                            />
                        </svg>
                    </div>

                    {isOpen && (
                        <div className="options absolute bg-white shadow-md rounded-md mt-2 p-2">
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 p-1 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelect(option)}
                                >
                                    <Image
                                        src={option.image}
                                        alt={`${option.name} Icon`}
                                        className="w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[25px]"
                                        width={25}
                                        height={25}
                                    />
                                    <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                        {option.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Crxconving;