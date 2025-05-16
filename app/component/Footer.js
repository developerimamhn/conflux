'use client'


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from "./image/logo.png";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
      ) {
        setToggle(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleScroll = (e, sectionId) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });
        setToggle(false);
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Example of animating elements when they come into view
      gsap.fromTo('.feature', 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.feature',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
  
      // Example of animating the button with scale and opacity
      gsap.fromTo('.buttonaudit-3', 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.buttonaudit-3',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
  
    const [isTranslated, setIsTranslated] = useState(false);
  
    const handleClick = () => {
      setIsTranslated(true);
      setTimeout(() => {
        setIsTranslated(false);
      }, 200);
    };


    const iconRefs = useRef([]);

  useEffect(() => {
    // GSAP entrance animation for icons
    gsap.fromTo(
      iconRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  // Handle hover animation with GSAP
  const handleMouseEnter = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1.2,
      rotate: 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const socialLinks = [
    { href: 'https://twitter.com', icon: 'twitter' },
    { href: 'https://linkedin.com', icon: 'linkedin' },
    { href: 'https://facebook.com', icon: 'facebook' },
    { href: 'https://telegram.org', icon: 'telegram' },
  ];
  
    return (
        <div id='Support' className='px-[32px] sm:px-[36px] md:px-[40px] lg:px-[48px] xl:px-[64px] 2xl:px-[77px]'>
            <div className='w-full '>
                <div className='flex items-center sm:items-start justify-between sm:flex-row flex-col gap-[40px]  '>
                    <div className='grid grid-cols-12 items-center justify-between gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[128px] h-full relative pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[77px] border-b-[1px] border-[#32343D]'>
                      <div className='col-span-12 sm:col-span-5'>
                        <Image className='sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[90px] 2xl:w-[110px] w-[135px] mx-auto sm:mx-0' src={logo} alt="loading..."/>
                        <p className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px] md:pr-[20px] xl:pr-[30%] text-center sm:!text-left sm:px-0 px-[20%]'>Conflux Network: Building a multi-chain ecosystem to enable creators, communities, and markets to connect globally across borders and protocols.
</p>
                      </div>
                      <div className='col-span-12 sm:col-span-7 grid grid-cols-2  sm:gap-0 justify-between items-center sm:items-start'>
                        <div className='flex items-center flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-center relative'>
                          <div className='h-full absolute left-0 top-0  w-[1px] z-[50] backgaeasfoter xl:block hidden'></div>
                          <div className='flex items-start flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-center relative'>
                          <a className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-[#FDFCFF] '>Categories</a>
                            <ul className='flex justify-start flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] footeritesm figtree text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Developers</a>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Technology</a>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Grants</a>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Partners</a>
                            </ul>
                            </div>
                        </div> 
                        <div className='flex items-center sm:items-end flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-center relative'>
                          <div className='h-full absolute left-0 top-0  w-[1px] z-[50] backgaeasfoter xl:block hidden'></div>
                          <div className='flex items-start flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-center relative'>
                          <a className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-[#FDFCFF] '>Quick Links</a>
                            <ul className='flex justify-start flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] footeritesm figtree text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>About</a>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Team</a>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Careers</a>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Ecosystem</a>
                            </ul> 
                            </div>
                        </div> 
                      </div>
                    </div>
                    
                </div>
                <div className='flex items-center sm:flex-row flex-col justify-between py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px]'>
                  <h3 className='conflueiah text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Copyright © 2022 Conflux. All Rights Reserved</h3>
                  <div className='flex items-center justify-between gap-[20px] sm:gap-[24px] md:gap-[32px] lg:gap-[36px] xl:gap-[40px] 2xl:gap-[48px]'>
                    <a href='#' className='conflueiah text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] cursor-pointer'>Privacy Policy</a>
                    <a href='#' className='conflueiah text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] cursor-pointer'>Terms of service</a>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;