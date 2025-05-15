'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image2 from './image/image1.png';
import Image from 'next/image';
import image1 from './image/image1 (2).png';


const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if the screen width is greater than 768px (non-mobile)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements
      gsap.from(textRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);


  const itemRefs = useRef([]);

  // GSAP animation effect
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1, // Delay between each item
          }
        );
      });
    }
  }, []);


    return (
        <div id="hero" ref={buttonRef} className='relative'>
          <div className='relative z-[2] overflow-hidden'>
              {/* <div className='w-1/6 h-1/6 absolute right-[20%] top-1/2 -translate-y-1/2 -z-10 sm:block hidden rounded-[388px] opacity-[0.76] bg-[#03FC9E] blur-[200px]'></div> */}
              <div className='pt-[80px] sm:pt-[81px] md:pt-[150px] xl:pt-[200px] 2xl:pt-[250px]  px-[24px] sm:px-[40px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[100px] w-full flex felx-center justify-center relative pb-[50px] sm:pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[140px] 2xl:pb-[180px]'>
                <Image className="absolute bottom-0 right-0 z-[-1] w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[100px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[64px] 2xl:h-[100px] mb-[16px] sm:mb-[20px] md:mb-[24px] lg:mb-[32px] xl:mb-[36px] 2xl:mb-[40px]" src={image2} alt="loading ..."/>
                <div  className='grid grid-cols-1 items-center'>
                  <div className='flex items-start flex-col justify-center'>
                    <div className='flex items-center sm:flex-row flex-col justify-start gap-[10px] sm:gap-[36px] md:gap-[40px] lg:gap-[48px] xl:gap-[64px] 2xl:gap-[96px]'>
                      <h2 className="blockchain-text text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[110px] 2xl:text-[140px]">
                        Blockcha<span className='blcokchaiatrea'>in</span>
                      </h2>
                      <p className='confiuxenablez lg:pr-[10%] sm:text-start text-center'>Conflux enables creators, communities, and markets to connect across borders and protocols</p>
                    </div>
                    <div className='flex sm:flex-row flex-col w-full items-center justify-start gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[64px]'>
                      <p className='confiuxenablezcrewate text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] sm:pt-0 pt-3'> 
                        <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[71px]' viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.957031" y="0.912842" width="68.7548" height="68.7548" rx="34.3774" stroke="#00C8FF" stroke-width="1.5"/>
                      <path d="M33.2634 22.5623L48.0624 22.5623M48.0624 22.5623V37.3613M48.0624 22.5623L22.6066 48.0181" stroke="#00C8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Creat wallet</p>
                      <h2 className="widtbrries text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[130px] sm:text-start text-center ">
                        Without barriers
                      </h2>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;