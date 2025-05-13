'use client';

import { useEffect, useRef } from "react";
import NavBar from './NavBar';
import HeroPage from './HeroPage';
import image1 from './image/image1.png';
import Image from 'next/image';
import { gsap } from "gsap";    


const Header = () => {
    const svgRef = useRef(null);

    useEffect(() => {
      // Ensure GSAP runs only on the client-side
      if (typeof window === "undefined") return;
  
      const svg = svgRef.current;
      if (!svg) return; // Guard against null ref
  
      // Target SVG elements directly with querySelectorAll
      const verticalLines = svg.querySelectorAll(".vertical-lines path");
      const horizontalLines = svg.querySelectorAll(".horizontal-lines path");
      const rectangles = svg.querySelectorAll(".rect-1, .rect-2, .rect-3");
      const highlightLines = svg.querySelectorAll(
        ".highlight-line, .vertical-highlight"
      );
  
      // Animate vertical lines
      gsap.from(verticalLines, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
      });
  
      // Animate horizontal lines
      gsap.from(horizontalLines, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5,
      });
  
      // Animate rectangles
      gsap.from(rectangles, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.3,
        delay: 1,
      });
  
      // Animate highlight lines
      gsap.fromTo(
        highlightLines,
        { opacity: 0.5 },
        {
          opacity: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2,
          delay: 1.5,
        }
      );
    }, []);
    return (
        <div className='relative overflow-hidden pb-3'>
            {/* <Image className="h-full absolute top-0 left-0 z-[-2]" src={image1} alt="loading ..."/> */}

            <svg className="w-1/3 absolute top-0 left-0 z-[-2]" viewBox="0 0 901 915" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_303_335)">
            <circle cx="71.3786" cy="85.1523" r="160.09" fill="#99E9FF"/>
            </g>
            <defs>
            <filter id="filter0_f_303_335" x="-757.712" y="-743.938" width="1658.18" height="1658.18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="334.5" result="effect1_foregroundBlur_303_335"/>
            </filter>
            </defs>
            </svg>

            <svg className="w-1/3 absolute top-0 right-0 z-[-2]" viewBox="0 0 866 850" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_303_334)">
            <circle cx="766" cy="83.7904" r="136.645" fill="#6CDFFF"/>
            </g>
            <defs>
            <filter id="filter0_f_303_334" x="0.354492" y="-681.855" width="1531.29" height="1531.29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="314.5" result="effect1_foregroundBlur_303_334"/>
            </filter>
            </defs>
            </svg>
            


            <NavBar/>
            <HeroPage/>

        </div>
    );
};

export default Header;