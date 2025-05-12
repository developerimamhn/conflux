'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image2 from './image/image2.png';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);





const Pagefive = () => {
  const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item (text content)
  const acquireRef = useRef(null); // Second grid item (image)

  useEffect(() => {
    // Create GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Create a timeline for better control and sequencing
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top 80%',
                end: 'bottom 10%', // Desktop-specific values
                scrub: 0.8,
              },
            });

            // Main wrapper animation (left to right)
            tl.fromTo(
              wrapperRef.current,
              { x: -100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
              },
              0 // Start at timeline's beginning
            );

            // First grid item (text content) animation (left to right)
            tl.fromTo(
              gridItem1Ref.current,
              { x: 150, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
              },
              0.1 // Slight stagger
            );

            // Second grid item (image) animation (faster right to left)
            tl.fromTo(
              acquireRef.current,
              { x: 50, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6, // Faster animation
                ease: 'power3.out',
              },
              0.25 // Stagger for visual hierarchy
            );
          }
        }
      );
    }, wrapperRef); // Scope animations to wrapperRef for React's strict mode

    // Cleanup GSAP context and animations
    return () => ctx.revert();
  }, []);
    return (
        <div id='Blog' className='relative '>
          <div className='relative'>
          <Image src={image2} alt='image' className='absolute top-0 left-0 h-full' />
            <div ref={wrapperRef} className='relative container mx-auto py-[50px] md:py-[68px] lg:py-[80px] xl:py-[110px] 2xl:py-[133px]'>
                <div className='flex items-center flex-col justify-center'>
                  <h2 className='tradines pt-2 sm:pt-0 text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px]  text-center lg:px-[20%]'>Let&apos;s Build The
                  future Together!</h2>
                  <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[20px] !text-center px-[10%] sm:px-0'>We help businesses and individuals leverage AI to drive growth, <br className='md:block hidden'/>enhance efficiency, and foster innovation.</p>
                  <div className='sm:flex-row flex-col flex items-center justify-center pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px]'>
                    <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center py-[9px] sm:py-[10px] md:py-[11px] lg:py-[12px] xl:py-[13px] 2xl:py-[14px] group gap-[7.50px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] '>
                    Contact us
                    </button>
                  </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Pagefive;