'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import imageone from './image/smslide1.png';
import image1 from './image/image1 (2).png';
import image2 from './image/image2.png';



gsap.registerPlugin(ScrollTrigger);

;

const Pageone = () => {
  const wrapperRef = useRef(null); // Outer container
  const titleRef = useRef(null); // "Core Products" title (if needed)
  const acquireRef = useRef(null); // "Acquire CRX" section (if needed)
  const cardRefs = useRef([]); // Refs for mapped cards

  // Helper to assign refs to card elements
  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    // GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Main wrapper animation
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
                  start: 'top 100%',
                  end: 'bottom 100%',
                  scrub: 0.8,
                },
              }
            );

            // Title animation (if used)
            if (titleRef.current) {
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
            }

            // Card animations with stagger
            cardRefs.current.forEach((card, index) => {
              if (!card) return;
              gsap.fromTo(
                card,
                { y: 50, opacity: 0, scale: 0.9 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  delay: index * 0.25, // Stagger effect
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 0.8,
                  },
                }
              );
            });

            // Acquire CRX section animation (if used)
            if (acquireRef.current) {
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
          }
        }
      );
    }, wrapperRef); // Scope to wrapperRef for React strict mode

    return () => ctx.revert(); // Cleanup
  }, []);


  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const numberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    }),
  };

  const countVariants = {
    hidden: { value: 0 },
    visible: (custom) => ({
      value: custom,
      transition: { duration: 2, ease: 'easeOut' },
    }),
  };

  const stats = [
    { value: 1, suffix: 'M+', label: 'Satisfied users of our front-end solutions' },
    { value: 80, suffix: '%', label: 'Clients reporting improved UX with our designs' },
    { value: 4.9, suffix: '/5', label: 'Average client rating for our services' },
    { value: 99, suffix: '%', label: 'Projects delivered on time and within budget' },
  ];

  return (
    <div id="Community" ref={wrapperRef} className="relative overflow-hidden py-[60px] md:py-[90px] lg:py-[110px] xl:py-[140px] 2xl:py-[180px] px-[36px] sm:px-[40px] md:px-[48px] lg:px-[64px] xl:px-[96px] 2xl:px-[128px] " >
      <div className="relative">
        <div className=' sm:w-2/5 absolute left-0 top-0 h-auto hidden sm:flex flex-col items-center justify-center'>
            <h2 className='cfxtokesn text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[68px] text-center'>The CFX Token</h2>
            <Image className='' src={imageone} alt=''/>
        </div>
          <div className='container mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center borderabnsotehaA relative">
              <div className='h-full absolute right-0 top-0  w-full  border-t-[1px] border-solid bg-transparent ![border-image:linear-gradient(to_right,#05091000,#05091000,#32343d66)_1] xl:block hidden'></div>
                <div className=' h-full absolute right-0 bottom-0 border-b-[1px] border-solid bg-transparent ![border-image:linear-gradient(to_right,#05091000,#05091000,#32343d66)_1] w-full xl:block hidden'></div>
                <div className='flex justify-center itesm-center flex-col'>
                  <Image src={image1} alt='' className='w-1/2 opacity-0 sm:block hidden' />
                  <h2 className='cfxtokesn text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[68px] text-center sm:hidden block'>The CFX Token</h2>
                  <Image className='sm:hidden block' src={imageone} alt=''/>
                </div>
                <div className='pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[32px] border-l-[1px] border-[#32343D] relative sm:block flex justify-center items-center flex-col z-10'>
                  <Image src={image2} alt='' className='w-1/3 absolute -bottom-[50px] left-[20%] z-[-1]' />
                  <p className='consnetesds text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] sm:text-start text-center'><span className='!text-[#E4F1F3]'> Confluxs token economy is built around the $CFX token,</span> a unit of value on the platform that enables token holders to pay transaction fees, earn rewards through staking, rent storage,and participate in network governance. CFX also incentivizes and rewards miners, who ensure the secure operation of the Network.</p>
                  <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center h-[30px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px]  group gap-[7.50px] mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[70px]'>
                    Discover Cfx
                  </button>
                </div>
                <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageone;