'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <div id="Blog" ref={wrapperRef} className="relative overflow-hidden py-[80px] sm:py-[60px] md:py-[70px] lg:py-[90px] xl:py-[120px] 2xl:py-[150px]" >
      <div className="relative">
        <div className="container mx-auto px-6 sm:px-0">
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[128px]">
            <div className='col-span-6'>
              <div className='flex items-start flex-col justify-start'>
                <h2 className='tradines text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] !text-start xl:pr-[10%] 2xl:pr-[20%]'>Empowering Businesses and Individuals with AI Growth</h2>
                <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[20px] !text-start xl:pr-[20%] 2xl:pr-[30%]'>We help businesses and individuals leverage AI to drive growth, enhance efficiency, and foster innovation.</p>
                  <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center py-[9px] sm:py-[10px] md:py-[11px] lg:py-[12px] xl:py-[13px] 2xl:py-[14px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] group gap-[7.50px] mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px] '>
                  Our Testimonial
                  </button>
              </div>
            </div>
            <div className='col-span-6'>
              <div className="grid grid-cols-2 gap-[32px] sm:gap-[36px] md:gap-[40px] lg:gap-[48px] xl:gap-[64px] 2xl:gap-[96px]" ref={ref}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={numberVariants}
                    initial="hidden"
                    animate={controls}
                    custom={index}
                  >
                    <motion.h2
                      className="tradines text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[50px] font-bold !text-start border-l-[2px] border-[#F94819] pl-[12px] sm:pl-[13px] md:pl-[14px] lg:pl-[15px] xl:pl-[16px] 2xl:pl-[20px]"
                      custom={stat.value}
                      variants={countVariants}
                      initial="hidden"
                      animate={controls}
                    >
                      <motion.span>
                        {stat.value % 1 === 0
                          ? stat.value.toLocaleString()
                          : stat.value.toFixed(1)}
                      </motion.span>
                      {stat.suffix}
                    </motion.h2>
                    <p className="bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-normal pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[20px] !text-start border-l-[2px] border-transparent pl-[12px] sm:pl-[13px] md:pl-[14px] lg:pl-[15px] xl:pl-[16px] 2xl:pl-[20px]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageone;