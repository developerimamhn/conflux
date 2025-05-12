'use client';


import React, { useEffect, useRef, useState  } from 'react';
import Image from 'next/image';
import image9 from './image/image9.png';
import imagefromleft from './image/imagefromleft.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pageeight = () => {
    const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  const [hasGradientBorder, setHasGradientBorder] = useState(false);
  const inputRef = useRef(null);

  const toggleGradientBorder = () => {
    setHasGradientBorder(!hasGradientBorder);
    inputRef.current.focus();
  };



  
    return (
        <div className='py-[40px] sm:py-[50px] md:py-[60px] lg:py-[90px] xl:py-[120px] 2xl:py-[150px]'>
          <div className='container mx-auto relative lg:py-[120px] xl:py-[150px] 2xl:py-[180px]'>
          <Image className='h-full absolute left-10 top-0 z-[10] sm:block hidden' src={imagefromleft} alt='loading...'/>


            <div className='grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 px-6 sm:px-0 items-center justify-center'>
            <div className="col-span-12 sm:col-span-6 flex justify-center">
                <Image
                  className="w-full object-cover pr-0 sm:pr-[20px] md:pr-[24px] lg:pr-[32px] xl:pr-[36px] 2xl:pr-[40px]"
                  src={image9} // Replace with actual image path
                  alt="Crypto scam protection"
                  priority // Optional: for above-the-fold images
                />
              </div>
              <div className="col-span-12 sm:col-span-6 relative z-20">
                <h2 className="tradines text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[3.5rem] font-bold">
                  <span className="bg-[#03FC9E] rounded-md px-2 py-1 text-[#15161B]">
                  Trade  
                  </span>{" "}
                  on the go with our mobile apps.
                </h2>
                <h3 className='takeexper text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[30px]'>Take control of your crypto anytime with the app that fits your experience</h3>
                <p className="bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[10px] sm:pt-[11px] md:pt-[12px] lg:pt-[13px] xl:pt-[14px] 2xl:pt-[15px]">
                Choose between the Bitstamp app, the easiest way to buy and sell crypto, or the Bitstamp Pro app, built for pro traders and crypto experts.
                </p>
                <p className="bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[30px]">
                Not yet available in UK & USA but coming soon.
                </p>
                <button className='buttonaudit cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] group gap-[7.50px] mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[69px]'>
                Get started
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Pageeight;