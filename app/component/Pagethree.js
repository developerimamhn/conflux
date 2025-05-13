'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import slide1 from './image/slide1.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation, Autoplay } from 'swiper/modules';;



gsap.registerPlugin(ScrollTrigger);





const Pagethree = () => {
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
                start: 'top 100%',
                end: 'bottom 100%', // Adjusted for smoother completion
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
                duration: 2,
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
                duration: 2,
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
                duration: 2, // Faster animation
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
          {/* <div className='w-1/3 absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 goadsgvedfevg h-1/3 -z-[1]'></div> */}
            <div  className='relative container mx-auto '>
                <div className="flex flex-col justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 px-4 sm:px-6 lg:px-8">
                  <div  className="relative">
                    <div>
                      <h2 className='speciasda text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[68px]'>Our Team</h2>
                        <div className='flex justify-between items-center w-full'>
                          <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[20px] !text-start !text-[#fff] relative !w-[ 482.534px]'>The core leadership team of Conflux Network is comprised of prominent researchers, scientists and business leaders with collective experience across the fields</p>
                          <div className="flex items-center justify-start mt-4 gap-6">
                          <div className="custom-button-next cursor-pointer hover:opacity-50 duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px]' viewBox="0 0 56 56" fill="none">
                            <circle cx="28" cy="28" r="27.5" transform="matrix(-1 0 0 1 56 0)" stroke="#00C8FF"/>
                            <path d="M18.245 27.9992L24.1514 31.4092L24.1514 24.5891L18.245 27.9992Z" fill="#00C8FF"/>
                            <rect width="13.6051" height="1.67976" transform="matrix(-1 0 0 1 37.7549 27.1592)" fill="#00C8FF"/>
                          </svg>
                          </div>
                          <div className=" custom-button-prev cursor-pointer hover:opacity-50 duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px]' viewBox="0 0 56 56" fill="none">
                            <circle cx="28" cy="28" r="27.5" stroke="#00C8FF"/>
                            <path d="M37.755 27.9992L31.8486 31.4092L31.8486 24.5891L37.755 27.9992Z" fill="#00C8FF"/>
                            <rect x="18.2451" y="27.1592" width="13.6051" height="1.67976" fill="#00C8FF"/>
                          </svg>
                          </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div  className="relative h-fit ">
                    {/* <div className='h-full w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[90px] sm;rounded-auto !rounded-none  greaidawsbadk z-50'></div> */}
                  <Swiper
                  slidesPerView={5}
                  spaceBetween={80}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  hashNavigation={{
                    watchState: true,
                  }}
                  pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    bulletClass: 'custom-bullet',
                    bulletActiveClass: 'custom-bullet-active',
                  }}
                  navigation={{
                    nextEl: '.custom-button-next',
                    prevEl: '.custom-button-prev',
                  }}
                  modules={[Pagination, Navigation, HashNavigation, Autoplay]}
                  className="mySwiper h-fit"
                    >
                    <SwiperSlide data-hash="slide1" className=''>
                      <Image src={slide1} alt="Image" className='w-full h-auto' />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide2" className=''>
                      <Image src={slide1} alt="Image" className='w-full h-auto' />
                      
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide3" className=''>
                      <Image src={slide1} alt="Image" className='w-full h-auto' />
                      
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide4" className=''>
                      <Image src={slide1} alt="Image" className='w-full h-auto' />
                      
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide5" className=''>
                      <Image src={slide1} alt="Image" className='w-full h-auto' />
                      
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide6" className=''>
                      <Image src={slide1} alt="Image" className='w-full h-auto' />
                      
                    </SwiperSlide>
                    </Swiper>
                  </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Pagethree;