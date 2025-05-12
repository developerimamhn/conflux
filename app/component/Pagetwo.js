'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import smslide1 from './image/smslide1.png'


gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    id: 1,
    image: smslide1, // Replace with actual image source
    title: "Automation<br className='lg:block hidden'/> Machine Learning",
    description: "Talk With Us",
  },
  {
    id: 2,
    image: smslide1, // Replace with actual image source
    title: "Al-Powered<br className='lg:block hidden'/>  Chatbots",
    description: "Talk With Us",
  },
  {
    id: 3,
    image: smslide1, // Replace with actual image source
    title: "Data Analytics<br className='lg:block hidden'/>  Deep Insights",
    description: "Talk With Us",
  },
  {
    id: 4,
    image: smslide1, // Replace with actual image source
    title: "Al Strategy<br className='lg:block hidden'/> Pro Consulting",
    description: "Talk With Us",
  },
];

const Pagetwo = () => {
  const wrapperRef = useRef(null);
  const gridItem1Ref = useRef(null);
  const gridItem2Ref = useRef(null);
  const gridItem3Ref = useRef(null);
  const titleRef = useRef(null);
  const acquireRef = useRef(null);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
  
        // Skip all animations on mobile
        if (isMobile) return;
  
        // Main wrapper animation (desktop only)
        gsap.fromTo(
          wrapperRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 0.8,
            },
          }
        );
  
        // Title animation (desktop only)
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.8,
            },
          }
        );
  
        // Grid items animation (desktop only)
        [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
          gsap.fromTo(
            ref.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.25,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 0.8,
              },
            }
          );
        });
  
        // Acquire CRX section animation (desktop only)
        gsap.fromTo(
          acquireRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: acquireRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.8,
            },
          }
        );
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);
  
  const itemRefs = useRef([]);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isMobile } = context.conditions;
  
        // Skip animations on mobile
        if (isMobile) return;
  
        // Item animations (desktop only)
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
              duration: 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 100%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1,
            }
          );
        });
      }
    );
  
    return () => mm.revert(); // Cleanup
  }, []);


    
    return (
        <div id='About'  className='pt-[60px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] 2xl:pt-[140px] px-6 sm:px-0 pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pb-[130px] xl:pb-[160px] 2xl:pb-[190px]'>
           <div className='container mx-auto'>
              <h2 className='piconsaisasz text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[64px]'>Pioneering AI consulting to drive innovation, <br className='lg:block hidden'/> efficiency, and growth for businesses.</h2>
              <div ref={wrapperRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
  {items.map((item) => (
    <div key={item.id} className="">
      <div className="poicsebsa !rounded-[20px] ">
        <div className="bg-[#030110] !rounded-t-[20px] !rounded-b-[10px]">
          <div className="autodesinania relative !rounded-t-[20px] !rounded-b-[10px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[83px] flex justify-start gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] flex-col">
            <Image className="w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[68px] shadow-[0px_25px_23px_0px_#00000040] rounded-4xl" src={item.image} alt="loading" />
            <h2
              className="autoalaidns text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/2 absolute -right-[15%] -top-[16%]"
              viewBox="0 0 380 340"
              fill="none"
            >
              <g opacity="0.81" filter="url(#filter0_f_4_66)">
                <ellipse cx="190" cy="170" rx="49" ry="29" fill="#FF6035" fill-opacity="0.81" />
              </g>
              <defs>
                <filter
                  id="filter0_f_4_66"
                  x="0.600006"
                  y="0.600006"
                  width="378.8"
                  height="338.8"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="70.2" result="effect1_foregroundBlur_4_66" />
                </filter>
              </defs>
            </svg>
            <svg
              className="w-1/2 absolute -right-[5%] -bottom-[28%]"
              viewBox="0 0 282 286"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6" filter="url(#filter0_f_4_74)">
                <ellipse
                  cx="140.929"
                  cy="142.995"
                  rx="32.9794"
                  ry="61.5994"
                  transform="rotate(-42.6696 140.929 142.995)"
                  fill="#FF6941"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_4_74"
                  x="0.639496"
                  y="0.475586"
                  width="280.579"
                  height="285.038"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="46" result="effect1_foregroundBlur_4_74" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="talkewa text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px]">
          {item.description}
        </div>
      </div>
    </div>
  ))}
</div>
           </div>
        </div>
    );
};

export default Pagetwo;