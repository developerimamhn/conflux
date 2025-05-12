'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);




const cardData = [
  {
    id: 1,
    title: 'Effortless ways to buy',
    discription: 'Pay with credit, debit cards or Apple Pay, Google Pay (some exceptions apply).',
    listItems: ['Intuitive interface', 'Seamless navigation', 'Quick transactions'],
  },
  {
    id: 2,
    title: 'Available everywhere',
    discription: 'Deposit and withdraw funds easily from anywhere in the world. US customers can use ACH for instant deposits.',
    listItems: ['95% of assets stored safely offline', 'Highly encrypted personal data', 'Whitelisting and transaction confirmations'],
  },
  {
    id: 3,
    title: 'Cash out in seconds',
    discription: 'Withdraw funds directly to your bank account quickly and securely.',
    listItems: ['Serving customers since 2011', 'Live customer support', 'Industry-leading uptime'],

  },
  {
    id: 4,
    title: 'Effortless ways to buy',
    discription: 'Pay with credit, debit cards or Apple Pay, Google Pay (some exceptions apply).',
    listItems: ['Intuitive interface', 'Seamless navigation', 'Quick transactions'],
  },
  {
    id: 5,
    title: 'Available everywhere',
    discription: 'Deposit and withdraw funds easily from anywhere in the world. US customers can use ACH for instant deposits.',
    listItems: ['95% of assets stored safely offline', 'Highly encrypted personal data', 'Whitelisting and transaction confirmations'],
  },
  {
    id: 6,
    title: 'Cash out in seconds',
    discription: 'Withdraw funds directly to your bank account quickly and securely.',
    listItems: ['Serving customers since 2011', 'Live customer support', 'Industry-leading uptime'],

  },
];

const Pagesix = () => {
  // State to track if the circle is on the left side
  const [isCircleLeft, setIsCircleLeft] = useState(true);

  // Handle click on left SVG
  const handleLeftClick = () => {
    setIsCircleLeft(true); // Move circle to left-0
  };

  // Handle click on right SVG
  const handleRightClick = () => {
    setIsCircleLeft(false); // Move circle to right-0
  };

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
          isMobile: '(max-width: 767px)',
        },
        (context) => {
          const { isDesktop, isMobile } = context.conditions;

          // Main wrapper animation
          gsap.fromTo(
            wrapperRef.current,
            { y: isMobile ? 50 : 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: isMobile ? 1 : 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: isMobile ? 'top 90%' : 'top 80%',
                end: 'bottom 20%',
                scrub: 0.8,
              },
            }
          );

          // Title animation (if used, currently no title in JSX)
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

          // Acquire CRX section animation (if used, currently no section in JSX)
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
      );
    }, wrapperRef); // Scope to wrapperRef for React strict mode

    return () => ctx.revert(); // Cleanup
  }, []);

    return (
        <div className='sm:pt-0 pt-16 ' id='Roadmap'>
            <div className='grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 px-6 sm:px-0 items-center justify-center container mx-auto xl:max-w-none xl:px-0'>
                    <div className="col-span-12 sm:col-span-4 xl:ml-[200px] ml-0">
                    <h2 className="tradines text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[45px] !font-semibold">
                        Buy crypto
                        {" "}
                        <span className="bg-[#03FC9E] rounded-md px-2 py-1 text-[#15161B]">
                        instantly  
                        </span>
                    </h2>
                    
                    <p className="bitstartp text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[10px] sm:pt-[11px] md:pt-[12px] lg:pt-[13px] xl:pt-[14px] 2xl:pt-[15px]">
                    Bitstamp makes trading easy, fast & reliable. With live customer support, staking andbank-grade security & insurance.Trusted Crypto Exchange Since 2011.
                    </p>
                    <div className='flex items-center justify-between sm:justify-start gap-6 '>
                    <button className='buttonaudit cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] group gap-[7.50px] mt-[24px] sm:mt-[32px] md:mt-[36px] lg:mt-[40px] xl:mt-[48px] 2xl:mt-[60px]'>
                    Get started
                    </button>
                    <div className="flex items-center justify-center mt-[24px] sm:mt-[32px] md:mt-[36px] lg:mt-[40px] xl:mt-[48px] 2xl:mt-[60px]">
                        <div className='relative posiningsezx flex items-center justify-center w-[80px] sm:w-[120px] h-[40px] sm:h-[60px]'>
                        <svg className={`absolute top-0 z-[-1] transition-all duration-300 ${isCircleLeft ? 'left-0' : 'right-0'} w-[40px] sm:w-[60px]`}  viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="30" fill="#03FC9E"/>
                        </svg>
                            <div className="w-1/2 h-full flex items-center justify-center absolute left-0 cursor-pointer custom-next transition-all duration-300"
          onClick={handleLeftClick}>
                                <svg className='w-[15px] sm:w-[20px]' viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.7996 8H2.59961" stroke={isCircleLeft ? 'black' : '#889593'} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 8L8 14M2 8L8 2" stroke={isCircleLeft ? 'black' : '#889593'} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="w-1/2 h-full flex items-center justify-center absolute right-0 cursor-pointer custom-prev transition-all duration-300"
          onClick={handleRightClick}>
                                <svg className='w-[15px] sm:w-[20px]' viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.60078 8H17.8008" stroke={isCircleLeft ? '#889593' : 'black'} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.4004 8L12.4004 14M18.4004 8L12.4004 2"  stroke={isCircleLeft ? '#889593' : 'black'} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="mySwiper col-span-12 sm:col-span-8  justify-center sm:py-0 py-10 ">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  loop={true}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                  }}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                    1224: { slidesPerView: 2.8 },
                  }}
                  className="mySwiper grid grid-cols-12 gap-5 h-[220px] sm:h-[270px] md:h-[300px] lg:h-[330px] xl:h-[360px] 2xl:h-[400px]"
                >
                  {cardData.map((card) => (
                    <SwiperSlide key={card.id}>
                      <div className="cicleone bg-transparent hover:bg-[#212227] duration-300 cursor-pointer py-[16px] sm:py-[20px] md:py-[24px] lg:py-[32px] xl:py-[36px] 2xl:py-[40px] px-[15px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[32px] 2xl:px-[34px] flex items-center justify-between flex-col gap-6 h-full">
                      <div>
                        <div className="eastrasin text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[23px] pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] text-center">
                          {card.title}
                        </div>
                        <ul className="pt-[5px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px]">
                          <li className="inturiss text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-center">
                            {card.discription}
                          </li>
                        </ul>
                        </div>
                        <div className="flex items-center justify-end learndihnsaz text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] gap-[10px]">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928932C12.9526 0.538408 12.3195 0.538408 11.9289 0.928932C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM1 8V9H19V8V7H1V8Z" fill="#03FC9E"/>
                                  </svg>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
        </div>
    );
};

export default Pagesix;