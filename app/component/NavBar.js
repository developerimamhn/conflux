"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';
import righticon from './image/righticon.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

    // Handle clicks outside to close the menu
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

    // Smooth scroll to section
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

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      

    return (
        <div className={` header ${scrolled ? "scrolled" : " "} z-[150] w-full header backgronsdvg   ${
            isVisible ? "translate-y-0 transition-transform duration-300 " : "-translate-y-full transition-transform duration-300 "
        }`}>
            
            <header className='px-[24px]   flex  justify-between items-center py-[20px] sm:py-[24px] lg:py-[30px] relative  sm:overflow-hidden backgroundimage sm:px-[40px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[100px]'>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
            <Link onClick={(e) => handleScrollToTop(e, "")} href='/' className='cursor-pointer relative flex  items-center justify-start Froggo-Logo'>
                <Image className='w-full h-[24px] sm:h-[32px] 2xl:h-[38.7px]' src={logo} alt=''/></Link>
                <div className='sm:hidden relative top-[-11px] -left-6'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                 

                <nav ref={menuRef} className={`navbar-items-main absolute  sm:left-0 sm:relative duration-1000 z-[99] sm:opacity-100 flex justif-start sm:justify-center items-start sm:items-center gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] 2xl:gap-[40px] sm:blur-none blur-[200] sm:bg-transparent bg-[#15161B] right-0 sm:flex-row flex-col p-[20px] sm:p-[0] sm:w-fit w-full  sm:h-full pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[60px]
                    ${toggle ? 'top-[67px] h-screen' :'-top-[500%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Devolopers" onClick={(e) => handleScroll(e, "Devolopers")}>
                    Devolopers
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[17px]' viewBox="0 0 17 17" fill="none">
                    <path d="M8.79205 3.45691C8.96886 3.45691 9.13843 3.52715 9.26345 3.65217C9.38848 3.7772 9.45871 3.94676 9.45871 4.12358V11.8476L12.3207 8.98558C12.4464 8.86414 12.6149 8.79694 12.7896 8.79846C12.9644 8.79998 13.1317 8.87009 13.2553 8.9937C13.3789 9.1173 13.449 9.28451 13.4505 9.45931C13.452 9.63411 13.3848 9.80251 13.2634 9.92824L9.26338 13.9282C9.13836 14.0532 8.96882 14.1234 8.79205 14.1234C8.61527 14.1234 8.44573 14.0532 8.32071 13.9282L4.32071 9.92824C4.25704 9.86675 4.20625 9.79318 4.17131 9.71185C4.13637 9.63051 4.11798 9.54303 4.11721 9.45451C4.11644 9.36599 4.13331 9.27821 4.16683 9.19627C4.20035 9.11434 4.24985 9.03991 4.31245 8.97731C4.37504 8.91472 4.44948 8.86522 4.53141 8.8317C4.61334 8.79818 4.70113 8.78131 4.78965 8.78208C4.87817 8.78285 4.96565 8.80124 5.04698 8.83618C5.12832 8.87112 5.20188 8.9219 5.26338 8.98558L8.12538 11.8476V4.12358C8.12538 3.94676 8.19562 3.7772 8.32064 3.65217C8.44567 3.52715 8.61524 3.45691 8.79205 3.45691Z" fill="#A7B1B2"/>
                    </svg>
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Ecosystem" onClick={(e) => handleScroll(e, "Ecosystem")}>
                    Ecosystem</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Community" onClick={(e) => handleScroll(e, "Community")}>
                    Community
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[17px]' viewBox="0 0 17 17" fill="none">
                    <path d="M8.79205 3.45691C8.96886 3.45691 9.13843 3.52715 9.26345 3.65217C9.38848 3.7772 9.45871 3.94676 9.45871 4.12358V11.8476L12.3207 8.98558C12.4464 8.86414 12.6149 8.79694 12.7896 8.79846C12.9644 8.79998 13.1317 8.87009 13.2553 8.9937C13.3789 9.1173 13.449 9.28451 13.4505 9.45931C13.452 9.63411 13.3848 9.80251 13.2634 9.92824L9.26338 13.9282C9.13836 14.0532 8.96882 14.1234 8.79205 14.1234C8.61527 14.1234 8.44573 14.0532 8.32071 13.9282L4.32071 9.92824C4.25704 9.86675 4.20625 9.79318 4.17131 9.71185C4.13637 9.63051 4.11798 9.54303 4.11721 9.45451C4.11644 9.36599 4.13331 9.27821 4.16683 9.19627C4.20035 9.11434 4.24985 9.03991 4.31245 8.97731C4.37504 8.91472 4.44948 8.86522 4.53141 8.8317C4.61334 8.79818 4.70113 8.78131 4.78965 8.78208C4.87817 8.78285 4.96565 8.80124 5.04698 8.83618C5.12832 8.87112 5.20188 8.9219 5.26338 8.98558L8.12538 11.8476V4.12358C8.12538 3.94676 8.19562 3.7772 8.32064 3.65217C8.44567 3.52715 8.61524 3.45691 8.79205 3.45691Z" fill="#A7B1B2"/>
                    </svg>
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#NewsFeed" onClick={(e) => handleScroll(e, "NewsFeed")}>
                    News Feed</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#About" onClick={(e) => handleScroll(e, "About")}>
                    About
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[17px]' viewBox="0 0 17 17" fill="none">
                    <path d="M8.79205 3.45691C8.96886 3.45691 9.13843 3.52715 9.26345 3.65217C9.38848 3.7772 9.45871 3.94676 9.45871 4.12358V11.8476L12.3207 8.98558C12.4464 8.86414 12.6149 8.79694 12.7896 8.79846C12.9644 8.79998 13.1317 8.87009 13.2553 8.9937C13.3789 9.1173 13.449 9.28451 13.4505 9.45931C13.452 9.63411 13.3848 9.80251 13.2634 9.92824L9.26338 13.9282C9.13836 14.0532 8.96882 14.1234 8.79205 14.1234C8.61527 14.1234 8.44573 14.0532 8.32071 13.9282L4.32071 9.92824C4.25704 9.86675 4.20625 9.79318 4.17131 9.71185C4.13637 9.63051 4.11798 9.54303 4.11721 9.45451C4.11644 9.36599 4.13331 9.27821 4.16683 9.19627C4.20035 9.11434 4.24985 9.03991 4.31245 8.97731C4.37504 8.91472 4.44948 8.86522 4.53141 8.8317C4.61334 8.79818 4.70113 8.78131 4.78965 8.78208C4.87817 8.78285 4.96565 8.80124 5.04698 8.83618C5.12832 8.87112 5.20188 8.9219 5.26338 8.98558L8.12538 11.8476V4.12358C8.12538 3.94676 8.19562 3.7772 8.32064 3.65217C8.44567 3.52715 8.61524 3.45691 8.79205 3.45691Z" fill="#A7B1B2"/>
                    </svg>
                    </a>

                    <ul className='sm:hidden flex flex-col  gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[32px]' viewBox="0 0 32 33" fill="none">
                    <g clip-path="url(#clip0_296_372)">
                        <path d="M14.7688 5.65435C9.16878 6.26235 4.80078 11.0143 4.80078 16.7903C4.80078 22.9823 9.80878 27.9903 16.0008 27.9903C21.7608 27.9903 26.5128 23.6383 27.1368 18.0383C27.2488 17.0623 26.1608 16.2783 25.2328 16.8543C24.1928 17.5263 22.9448 17.9103 21.6168 17.9103C17.9048 17.9103 14.8968 14.9023 14.8968 11.1903C14.8968 9.86235 15.2808 8.63035 15.9368 7.59035C16.4808 6.75835 15.8888 5.55835 14.7688 5.65435Z" fill="#E4F1F3"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_296_372">
                        <rect width="32" height="32" fill="white" transform="translate(0 0.790283)"/>
                        </clipPath>
                    </defs>
                    </svg>
                    <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center font- h-[30px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] '>
                    Creat wallet
                    </button>
                    </ul>
                </nav>
                
                <ul className='sm:flex hidden gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] ml-atuo'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[32px]' viewBox="0 0 32 33" fill="none">
                    <g clip-path="url(#clip0_296_372)">
                        <path d="M14.7688 5.65435C9.16878 6.26235 4.80078 11.0143 4.80078 16.7903C4.80078 22.9823 9.80878 27.9903 16.0008 27.9903C21.7608 27.9903 26.5128 23.6383 27.1368 18.0383C27.2488 17.0623 26.1608 16.2783 25.2328 16.8543C24.1928 17.5263 22.9448 17.9103 21.6168 17.9103C17.9048 17.9103 14.8968 14.9023 14.8968 11.1903C14.8968 9.86235 15.2808 8.63035 15.9368 7.59035C16.4808 6.75835 15.8888 5.55835 14.7688 5.65435Z" fill="#E4F1F3"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_296_372">
                        <rect width="32" height="32" fill="white" transform="translate(0 0.790283)"/>
                        </clipPath>
                    </defs>
                    </svg>
                <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center h-[30px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px]  group gap-[7.50px]'>
                    Creat wallet
                </button>
                </ul>
                
                
            </header>
        </div>
    );
};

export default NavBar;