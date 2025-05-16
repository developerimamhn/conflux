'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import smslide1 from './image/mobiledap.png';
import backgrundtexxt from './image/backgrundtexxt.png';


gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "High Throughput",
    description: "Our breakthrough Tree-Graph consensus algorithm uses parallel processing of blocks and transactions to lower confirmation times and increase TPS.",
    svgPath: <svg width="103" height="104" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="51.5" cy="52.3477" r="50" fill="url(#paint0_linear_296_473)"/>
<circle cx="51.5" cy="52.3477" r="50.75" stroke="url(#paint1_linear_296_473)" stroke-opacity="0.35" stroke-width="1.5"/>
<path d="M50.6241 48.1172C46.4629 48.1172 43.0831 51.2163 42.6689 55.284H44.8932C45.2539 52.7591 47.2175 50.789 49.7159 50.4014C49.8493 49.8004 49.9497 49.3593 49.9897 49.1789C50.0566 48.8851 50.3169 48.6713 50.6242 48.6713C50.9314 48.6713 51.1918 48.8782 51.2587 49.1789C51.2987 49.3593 51.399 49.8 51.5325 50.4014C54.0305 50.7887 55.9944 52.7591 56.3551 55.284H58.5794C58.1652 51.2097 54.7923 48.1172 50.6242 48.1172H50.6241Z" fill="white"/>
<path d="M49.0273 60.5143C49.0273 61.396 49.7488 62.1175 50.6305 62.1175C51.5123 62.1175 52.2338 61.3961 52.2338 60.5143C52.2338 59.8463 51.4189 55.8924 50.6305 52.2988C49.8422 55.8923 49.0273 59.8463 49.0273 60.5143Z" fill="white"/>
<path d="M47.0772 68.1752V71.1408C47.0772 71.5484 47.3645 71.9022 47.7652 71.9826L54.3309 73.3651C54.5913 73.4185 54.852 73.3585 55.0589 73.1912C55.2592 73.0243 55.3796 72.7836 55.3796 72.5233V67.761C53.9102 68.3621 52.3139 68.6963 50.6304 68.6963C49.3949 68.6959 48.1993 68.509 47.0771 68.1752L47.0772 68.1752Z" fill="white"/>
<path d="M50.6237 44.8378C44.4052 44.8378 39.3418 49.9008 39.3418 56.1197C39.3418 62.3383 44.4048 67.4017 50.6237 67.4017C56.8423 67.4017 61.9056 62.3387 61.9056 56.1197C61.9056 49.9008 56.8492 44.8378 50.6237 44.8378ZM59.7344 56.3795C59.6141 56.5064 59.4472 56.5733 59.2737 56.5733L55.7666 56.5729C55.4194 56.5729 55.1321 56.2991 55.1187 55.9518C55.0452 53.9414 53.6828 52.2982 51.8393 51.7841C52.5138 54.8701 53.5225 59.6189 53.5225 60.5141C53.5225 62.1103 52.22 63.4129 50.6237 63.4129C49.0275 63.4129 47.7249 62.1104 47.7249 60.5141C47.7249 59.6124 48.7336 54.8701 49.4081 51.7841C47.5646 52.2983 46.2022 53.9415 46.1287 55.9518C46.1153 56.2991 45.828 56.5729 45.4808 56.5729H41.9809C41.8071 56.5729 41.6402 56.4994 41.5202 56.3791C41.3999 56.2522 41.3334 56.0853 41.3334 55.9115C41.4403 50.8954 45.608 46.8212 50.6244 46.8212C55.6404 46.8212 59.8016 50.9024 59.9154 55.9115C59.9212 56.0853 59.8543 56.2526 59.7343 56.3795H59.7344Z" fill="white"/>
<path d="M40.893 48.1572C43.2041 45.3385 46.7039 43.5354 50.625 43.5354C54.9531 43.5354 58.7736 45.7327 61.0385 49.0659L67.4974 37.5913L34.9492 37.591L40.893 48.1572Z" fill="white"/>
<path d="M69.9744 32.3477H32.4769C31.3813 32.3477 30.5 33.236 30.5 34.3246C30.5 35.4136 31.3814 36.3019 32.4769 36.3019H69.9744C71.07 36.3019 71.9514 35.4136 71.9514 34.325C71.9514 33.236 71.0696 32.3477 69.9744 32.3477Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_296_473" x1="1.5" y1="2.34766" x2="122.143" y2="55.4486" gradientUnits="userSpaceOnUse">
<stop stop-color="#151A21"/>
<stop offset="1" stop-color="#151A21" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_296_473" x1="1.5" y1="2.34766" x2="84.2593" y2="86.9122" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C8FF"/>
<stop offset="1" stop-color="#00C8FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
,
  },
  {
    title: "Secure",
    description: "Our breakthrough Tree-Graph consensus algorithm uses parallel processing of blocks and transactions to lower confirmation times and increase TPS.",
    svgPath: <svg width="103" height="104" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="51.5" cy="52.3477" r="50" fill="url(#paint0_linear_296_490)"/>
<circle cx="51.5" cy="52.3477" r="50.75" stroke="url(#paint1_linear_296_490)" stroke-opacity="0.35" stroke-width="1.5"/>
<path d="M69.1708 39.5945C58.971 38.3193 53.1423 32.3996 52.9144 32.1721C52.368 31.5801 51.5484 31.3071 50.7743 31.3525C50.1369 31.398 49.545 31.7168 49.0895 32.1721C49.044 32.2175 43.2152 38.2739 32.8793 39.5945C31.4678 39.7766 30.3748 41.0513 30.5116 42.4632C32.1964 65.9136 49.1813 74.0192 49.9101 74.3384C50.2744 74.5205 50.6387 74.566 51.0031 74.566C51.3674 74.566 51.7771 74.4751 52.096 74.3384C52.8247 74.0195 69.809 65.9143 71.4945 42.418C71.5851 41.0516 70.5379 39.7769 69.1719 39.5948L69.1708 39.5945ZM58.4239 58.6286C58.4239 59.7215 57.5131 60.632 56.4205 60.632H45.5371C44.4442 60.632 43.5337 59.7212 43.5337 58.6286V51.4795C43.5337 50.3866 44.4445 49.4761 45.5371 49.4761H46.1291V46.3343C46.1291 43.6477 48.3146 41.5076 50.9558 41.5076C53.5969 41.5076 55.7825 43.6931 55.7825 46.3343V49.4761L56.4657 49.4758C57.5586 49.4758 58.4691 50.3866 58.4691 51.4792V58.6285L58.4239 58.6286Z" fill="#E4F1F3"/>
<path d="M53.7346 46.3789C53.7346 44.8761 52.5053 43.6468 51.0026 43.6468C49.4998 43.6468 48.2705 44.8761 48.2705 46.3789V49.5207H53.7346V46.3789Z" fill="#E4F1F3"/>
<path d="M52.733 52.7999L50.4562 55.0768L49.3177 53.9383C48.908 53.5286 48.2248 53.5286 47.815 53.9383C47.3598 54.3481 47.3598 55.0313 47.8154 55.4411L49.7279 57.3536C49.9555 57.5813 50.1831 57.6725 50.4566 57.6725C50.7296 57.6725 51.0031 57.5816 51.1852 57.3536L54.1907 54.3481C54.6005 53.9384 54.6005 53.2552 54.1907 52.8454C53.7806 52.3902 53.1429 52.3902 52.7331 52.7999L52.733 52.7999Z" fill="#E4F1F3"/>
<defs>
<linearGradient id="paint0_linear_296_490" x1="1.5" y1="2.34766" x2="122.143" y2="55.4486" gradientUnits="userSpaceOnUse">
<stop stop-color="#151A21"/>
<stop offset="1" stop-color="#151A21" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_296_490" x1="1.5" y1="2.34766" x2="84.2593" y2="86.9122" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C8FF"/>
<stop offset="1" stop-color="#00C8FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
,
  },
  {
    title: "Interoperable",
    description: "Our breakthrough Tree-Graph consensus algorithm uses parallel processing of blocks and transactions to lower confirmation times and increase TPS.",
    svgPath: <svg width="103" height="104" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="51.5" cy="52.3477" r="50" fill="url(#paint0_linear_296_504)"/>
<circle cx="51.5" cy="52.3477" r="50.75" stroke="url(#paint1_linear_296_504)" stroke-opacity="0.35" stroke-width="1.5"/>
<path d="M69.4079 34.0609H58.3875C57.6261 34.0609 57.0098 34.6772 57.0098 35.4387V42.3266C57.0098 43.088 57.6261 43.7043 58.3875 43.7043H62.5203C61.7589 43.7043 61.1426 44.3207 61.1426 45.0821C61.1426 45.8435 61.7589 46.4599 62.5203 46.4599H65.2754C66.0368 46.4599 66.6532 45.8435 66.6532 45.0821C66.6532 44.3207 66.0369 43.7043 65.2754 43.7043H69.4082C70.1696 43.7043 70.786 43.088 70.786 42.3266L70.7856 35.4387C70.7856 34.6773 70.1697 34.0609 69.4082 34.0609H69.4079Z" fill="#FAFBFB"/>
<path d="M44.611 60.2355H33.5906C32.8292 60.2355 32.2129 60.8518 32.2129 61.6133V68.5012C32.2129 69.2626 32.8292 69.8789 33.5906 69.8789H37.7234C36.962 69.8789 36.3457 70.4953 36.3457 71.2567C36.3457 72.0181 36.962 72.6344 37.7234 72.6344H40.4786C41.24 72.6344 41.8563 72.0181 41.8563 71.2567C41.8563 70.4953 41.24 69.8789 40.4786 69.8789H44.6114C45.3728 69.8789 45.9891 69.2626 45.9891 68.5012V61.6133C45.9891 60.8515 45.3728 60.2355 44.6114 60.2355H44.611Z" fill="#FAFBFB"/>
<path d="M63.8981 47.8366C63.1366 47.8366 62.5203 48.4529 62.5203 49.2143V51.9695H56.2029L52.4737 48.2403C51.9356 47.7021 51.0639 47.7021 50.5254 48.2403L46.7965 51.9695H39.1014C38.34 51.9695 37.7236 52.5858 37.7236 53.3472V57.48C37.7236 58.2414 38.34 58.8578 39.1014 58.8578C39.8628 58.8578 40.4791 58.2414 40.4791 57.48V54.7249H46.7965L50.5257 58.4541C50.7948 58.7228 51.1471 58.8573 51.4995 58.8573C51.8522 58.8573 52.2045 58.7228 52.4736 58.4537L56.2028 54.7245H63.898C64.6594 54.7245 65.2757 54.1082 65.2757 53.3468V49.214C65.2757 48.4526 64.6594 47.8366 63.898 47.8366L63.8981 47.8366Z" fill="#FAFBFB"/>
<defs>
<linearGradient id="paint0_linear_296_504" x1="1.5" y1="2.34766" x2="122.143" y2="55.4486" gradientUnits="userSpaceOnUse">
<stop stop-color="#151A21"/>
<stop offset="1" stop-color="#151A21" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_296_504" x1="1.5" y1="2.34766" x2="84.2593" y2="86.9122" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C8FF"/>
<stop offset="1" stop-color="#00C8FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
,
  },
  {
    title: "Scalable",
    description: "Our breakthrough Tree-Graph consensus algorithm uses parallel processing of blocks and transactions to lower confirmation times and increase TPS.",
    svgPath: <svg width="103" height="104" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="51.5" cy="52.3477" r="50" fill="url(#paint0_linear_296_520)"/>
<circle cx="51.5" cy="52.3477" r="50.75" stroke="url(#paint1_linear_296_520)" stroke-opacity="0.35" stroke-width="1.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.477 67.4601H37.3732V39.3563H46.27V35.44H33.457V71.3769H69.3939V58.5639H65.4776L65.477 67.4601Z" fill="#FAFBFB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.9064 35.3184V39.2348H63.0507L48.2493 54.0361V44.8918H44.333V60.5282H59.2703V56.6119H51.2109L65.6265 42.1963V50.2572H69.5425V35.3184H53.9064Z" fill="#FAFBFB"/>
<defs>
<linearGradient id="paint0_linear_296_520" x1="1.5" y1="2.34766" x2="122.143" y2="55.4486" gradientUnits="userSpaceOnUse">
<stop stop-color="#151A21"/>
<stop offset="1" stop-color="#151A21" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_296_520" x1="1.5" y1="2.34766" x2="84.2593" y2="86.9122" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C8FF"/>
<stop offset="1" stop-color="#00C8FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
,
  },
  {
    title: "Built-In Staking",
    description: "Our breakthrough Tree-Graph consensus algorithm uses parallel processing of blocks and transactions to lower confirmation times and increase TPS.",
    svgPath: <svg width="103" height="104" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="51.5" cy="52.3477" r="50" fill="url(#paint0_linear_296_533)"/>
<circle cx="51.5" cy="52.3477" r="50.75" stroke="url(#paint1_linear_296_533)" stroke-opacity="0.35" stroke-width="1.5"/>
<path d="M49.9647 60.0977V64.8536H43.8279C42.9075 64.8536 42.2936 65.4671 42.2936 66.3879C42.2936 67.3084 42.9071 67.9223 43.8279 67.9223H59.169C60.0894 67.9223 60.7033 67.3088 60.7033 66.3879C60.7033 65.4675 60.0898 64.8536 59.169 64.8536H53.0323V60.0977C56.5608 59.3307 59.169 56.2621 59.169 52.5804C59.169 48.8983 56.5608 45.8302 53.0323 45.0632L53.0327 41.8412H59.1694C60.0898 41.8412 60.7037 41.2277 60.7037 40.3068C60.7037 39.3864 60.0903 38.7725 59.1694 38.7725L43.8273 38.7729C42.9069 38.7729 42.293 39.3864 42.293 40.3073C42.293 41.2277 42.9064 41.8416 43.8273 41.8416H49.964V45.0632C46.4354 45.8301 43.8273 48.8987 43.8273 52.5804C43.8273 56.2625 46.4354 59.3307 49.964 60.0977L49.9647 60.0977ZM47.0496 52.734C47.3565 52.427 47.8165 52.427 48.1234 52.734L50.4246 55.0352L54.5667 48.1314C54.7202 47.8245 55.3336 47.671 55.6405 47.8245C55.9475 47.978 56.1009 48.438 55.9475 48.8983L51.345 56.569C51.1916 56.7225 51.0381 56.8759 50.7316 56.8759H50.5781C50.4246 56.8759 50.1177 56.7225 49.9646 56.7225L46.8964 53.6542C46.896 53.6542 46.896 53.0408 47.0495 52.7338L47.0496 52.734Z" fill="#FAFBFB"/>
<path d="M56.1018 61.7853V63.3196H59.17C60.8577 63.3196 62.2382 64.7004 62.2382 66.3878C62.2382 68.0755 60.8574 69.456 59.17 69.456H56.1018V70.9903C56.1018 71.9108 56.7152 72.5246 57.6361 72.5246H66.841C67.7615 72.5246 68.3754 71.9112 68.3754 70.9903V60.2508H57.6359C56.7155 60.2508 56.1016 60.8647 56.1016 61.7852L56.1018 61.7853Z" fill="#FAFBFB"/>
<path d="M40.7613 66.3879C40.7613 64.7002 42.1421 63.3197 43.8296 63.3197H46.8978V61.7854C46.8978 60.865 46.2843 60.2511 45.3635 60.2511H34.625V70.9906C34.625 71.911 35.2385 72.5249 36.1593 72.5249H45.3643C46.2847 72.5249 46.8986 71.9114 46.8986 70.9906V69.4563H43.8304C42.1426 69.4563 40.7617 68.0755 40.7617 66.388L40.7613 66.3879Z" fill="#FAFBFB"/>
<path d="M62.239 40.3073C62.239 41.9951 60.8582 43.3755 59.1708 43.3755H56.1026V44.9099C56.1026 45.8303 56.7161 46.4442 57.6369 46.4442H66.8419C67.7623 46.4442 68.3762 45.8307 68.3762 44.9099L68.3754 34.1704H57.6359C56.7155 34.1704 56.1016 34.7838 56.1016 35.7047V37.239H59.1698C60.8579 37.239 62.2387 38.6194 62.2387 40.3072L62.239 40.3073Z" fill="#FAFBFB"/>
<path d="M34.624 34.1705V44.91C34.624 45.8304 35.2375 46.4443 36.1583 46.4443H45.3633C46.2837 46.4443 46.8976 45.8308 46.8976 44.91V43.3757H43.8294C42.1417 43.3757 40.7612 41.9949 40.7612 40.3075C40.7612 38.6197 42.142 37.2392 43.8294 37.2392H46.8976L46.8972 35.7049C46.8972 34.7845 46.2837 34.1706 45.3629 34.1706L34.624 34.1705Z" fill="#FAFBFB"/>
<defs>
<linearGradient id="paint0_linear_296_533" x1="1.5" y1="2.34766" x2="122.143" y2="55.4486" gradientUnits="userSpaceOnUse">
<stop stop-color="#151A21"/>
<stop offset="1" stop-color="#151A21" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_296_533" x1="1.5" y1="2.34766" x2="84.2593" y2="86.9122" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C8FF"/>
<stop offset="1" stop-color="#00C8FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
,
  },
  {
    title: "Low Fees",
    description: "Our breakthrough Tree-Graph consensus algorithm uses parallel processing of blocks and transactions to lower confirmation times and increase TPS.",
    svgPath: <svg width="103" height="104" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="51.5" cy="52.3477" r="50" fill="url(#paint0_linear_296_549)"/>
<circle cx="51.5" cy="52.3477" r="50.75" stroke="url(#paint1_linear_296_549)" stroke-opacity="0.35" stroke-width="1.5"/>
<path d="M35.0954 71.1306H29.9092V56.3218H35.0954C36.0509 56.3218 36.8696 57.1406 36.8696 58.096V69.3555C36.8696 70.3791 36.1192 71.1298 35.0954 71.1298V71.1306ZM72.2196 65.3299L58.5711 73.8604C55.8413 75.5664 52.5657 75.5664 50.0406 74.2698C41.9879 70.5165 40.8281 69.1516 37.6209 69.0832L37.6212 58.4372H44.4454C49.7683 58.4372 49.7 63.214 55.3644 63.214H59.8685C60.824 63.214 61.6428 64.0328 61.6428 64.9883C61.6428 65.9438 60.824 66.7626 59.8685 66.7626L50.6556 66.7629C50.4509 66.7629 50.3145 66.8993 50.3145 67.104C50.3145 67.3087 50.4509 67.445 50.6556 67.445H59.8681C60.2775 67.445 60.6189 67.3766 60.8916 67.1719L70.5144 62.2584C71.3332 61.7807 72.425 62.1221 72.9028 63.0092C73.3125 63.8968 73.0395 64.8519 72.2207 65.3296L72.2196 65.3299Z" fill="#FAFBFB"/>
<path d="M56.0466 36.1224C56.0466 36.4991 55.7408 36.8048 55.3641 36.8048C54.987 36.8048 54.6816 36.4991 54.6816 36.1224C54.6816 35.7453 54.987 35.4399 55.3641 35.4399C55.7408 35.4399 56.0466 35.7453 56.0466 36.1224Z" fill="#FAFBFB"/>
<path d="M48.4714 49.225C48.4714 49.6017 48.1656 49.9074 47.7889 49.9074C47.4118 49.9074 47.1064 49.6017 47.1064 49.225C47.1064 48.8479 47.4118 48.5425 47.7889 48.5425C48.1656 48.5425 48.4714 48.8479 48.4714 49.225Z" fill="#FAFBFB"/>
<path d="M55.3631 40.1492C52.77 40.1492 50.6543 42.2645 50.6543 44.858C50.6543 47.4511 52.7696 49.5669 55.3631 49.5669C57.9563 49.5669 60.072 47.4515 60.072 44.858C60.072 42.2645 57.9563 40.1492 55.3631 40.1492ZM56.5913 44.0388H55.7725V43.9704C55.7725 43.6974 55.4995 43.4243 55.1584 43.4927C55.0221 43.561 54.8854 43.6974 54.8174 43.8337C54.749 44.1747 54.9537 44.4478 55.2951 44.4478C55.5682 44.4478 55.8413 44.5162 56.046 44.7209C56.8648 45.5397 56.4554 46.6315 55.6366 46.9046V46.9729C55.6366 47.1776 55.4319 47.3823 55.2272 47.3823C55.0225 47.3823 54.8178 47.1776 54.8178 46.9729V46.9046C54.34 46.7682 53.9306 46.2221 53.9306 45.7444V45.676L54.8854 45.6768V45.7451C54.8854 46.0182 55.1584 46.2912 55.4995 46.2229C55.6358 46.1545 55.7725 46.0182 55.8405 45.8818C55.9089 45.5408 55.7042 45.2677 55.3627 45.2677C55.0897 45.2677 54.8166 45.1994 54.6119 44.9947C53.7931 44.1759 54.2025 43.084 55.0213 42.811V42.7426C55.0213 42.5379 55.226 42.3332 55.4307 42.3332C55.6354 42.3332 55.8401 42.5379 55.8401 42.7426V42.811C56.3179 42.9473 56.7273 43.4934 56.7273 43.9712L56.728 44.0388H56.5913Z" fill="#FAFBFB"/>
<path d="M66.8286 38.1015L55.5007 31.5504C55.3643 31.482 55.2276 31.482 55.1596 31.5504L43.8316 38.1015C43.6953 38.1699 43.627 38.3062 43.627 38.3746V51.4772C43.627 51.6136 43.6953 51.7503 43.8316 51.7503L55.1596 58.3014C55.228 58.3014 55.296 58.3697 55.3643 58.3697C55.4327 58.3697 55.5007 58.3697 55.569 58.3014L66.897 51.7503C67.0333 51.6819 67.1017 51.5456 67.1017 51.4772V38.3746C67.0333 38.2379 66.965 38.1699 66.8286 38.1015H66.8286ZM62.5292 39.8758L63.2117 40.2852V41.3087H62.5292V40.6946L62.1882 40.4899L62.5292 39.8758ZM62.5292 44.1752V42.742H63.2117V44.1752H62.5292ZM63.2117 45.5398V46.768H62.5292V45.5398H63.2117ZM57.6161 37.078L58.8442 37.7605L58.5032 38.3746L57.275 37.6921L57.6161 37.078ZM55.364 34.7576C56.1148 34.7576 56.7289 35.3717 56.7289 36.1226C56.7289 36.8734 56.1148 37.4875 55.364 37.4875C54.6132 37.4875 53.999 36.8734 53.999 36.1226C53.999 35.3718 54.5451 34.7576 55.364 34.7576ZM53.0436 37.078L53.3846 37.6921L52.3611 38.3062L52.0201 37.6921L53.0436 37.078ZM47.448 40.2852L48.3351 39.8075L48.6762 40.4216L48.1984 40.6946V41.104H47.516V40.2852H47.448ZM47.448 42.5373H48.1304V43.9706H47.448V42.5373ZM47.448 45.4035H48.1304V46.8367H47.448V45.4035ZM47.789 50.6581C47.0382 50.6581 46.4241 50.044 46.4241 49.2931C46.4241 48.5423 47.0382 47.9282 47.789 47.9282C48.5398 47.9282 49.154 48.5423 49.154 49.2931C49.154 49.9756 48.5399 50.6581 47.789 50.6581ZM50.7235 38.3743L51.0645 38.9884L49.8363 39.6708L49.4953 39.0567L50.7235 38.3743ZM50.7235 51.34L49.7 50.7259L50.041 50.1118L51.0645 50.7259L50.7235 51.34ZM53.1803 52.7049L51.9521 52.0225L52.2931 51.4084L53.5213 52.0908L53.1803 52.7049ZM55.364 53.9335L54.4768 53.3874L54.8178 52.7733L55.364 53.1143L55.705 52.9096L56.046 53.5237L55.364 53.9335ZM57.2062 52.8417L56.8652 52.2276L58.0934 51.5451L58.4344 52.1592L57.2062 52.8417ZM55.364 50.2482C52.3615 50.2482 49.9726 47.7914 49.9726 44.8568C49.9726 41.9224 52.4294 39.4655 55.364 39.4655C58.2984 39.4655 60.7553 41.9223 60.7553 44.8568C60.7549 47.7913 58.2985 50.2482 55.364 50.2482ZM59.663 51.4767L59.322 50.8626L60.5501 50.1802L60.8912 50.7943L59.663 51.4767ZM60.9599 39.8073L59.7318 39.1249L60.0728 38.5108L61.301 39.1932L60.9599 39.8073ZM62.8706 50.6579C62.1198 50.6579 61.5057 50.0438 61.5057 49.2929C61.5057 48.5421 62.1197 47.928 62.8706 47.928C63.6215 47.928 64.2355 48.5421 64.2355 49.2929C64.2355 49.9754 63.6215 50.6579 62.8706 50.6579Z" fill="#FAFBFB"/>
<path d="M63.5524 49.225C63.5524 49.6017 63.2467 49.9074 62.87 49.9074C62.4929 49.9074 62.1875 49.6017 62.1875 49.225C62.1875 48.8479 62.4929 48.5425 62.87 48.5425C63.2467 48.5425 63.5524 48.8479 63.5524 49.225Z" fill="#FAFBFB"/>
<defs>
<linearGradient id="paint0_linear_296_549" x1="1.5" y1="2.34766" x2="122.143" y2="55.4486" gradientUnits="userSpaceOnUse">
<stop stop-color="#151A21"/>
<stop offset="1" stop-color="#151A21" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_296_549" x1="1.5" y1="2.34766" x2="84.2593" y2="86.9122" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C8FF"/>
<stop offset="1" stop-color="#00C8FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
,
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
        <div ref={wrapperRef} id='Devolopers'  className='pt-[60px] md:pt-[90px] lg:pt-[110px] xl:pt-[140px] 2xl:pt-[180px] px-6 sm:px-0 pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pb-[130px] xl:pb-[160px] 2xl:pb-[180px] relative '>
          <Image  src={backgrundtexxt} alt='loading...' className=' mr-[24px] sm:mr-[32px] md:mr-[36px] lg:mr-[40px] xl:mr-[48px] 2xl:mr-[64px] w-[40px] sm:w-[60px] md:w-[90px] lg:w-[118px] xl:w-[164px] 2xl:w-[185px]  absolute right-0  -bottom-[32px] sm:-bottom-[36px] md:-bottom-[40px] lg:-bottom-[48px] xl:-bottom-[64px] 2xl:-bottom-[96px]' />
           <div className='container relative mx-auto px-[15px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[32px] 2xl:px-[36px]'>
            <Image src={smslide1} alt='loading...' className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[96px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[64px] 2xl:h-[96px] absolute left-0 top-0 animate-spin-slow' />
            
            
              <h2 className='piconsaisasz text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[68px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]'>Why Conflux</h2>
              <p className='conflwtaa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] lg:px-[25%]'>Conflux Network: Building a multi-chain ecosystem to enable creators, communities, and markets to connect globally across borders and protocols.</p>
              <div className="grid grid-cols-12 gap-y-[32px] sm:gap-y-[36px] md:gap-y-[40px] lg:gap-y-[48px] xl:gap-y-[64px] 2xl:gap-y-[96px] gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[115px]">
              {cardData.map((item, index) => (
                <div
                  key={index}
                  className="col-span-12 sm:col-span-6 lg:col-span-4 relative sectionraping pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[30px] pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[30px] pr-[20px] sm:pr-[24px] md:pr-[32px] lg:pr-[36px] xl:pr-[40px] 2xl:pr-[50px]"
                >
                  <svg
                    className="w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[103px] absolute -top-[16px] sm:-top-[18px] md:-top-[20px] lg:-top-[24px] xl:-top-[32px] 2xl:-top-[51.5px] left-1/2 -translate-x-1/2 sm:translate-0 sm:left-[15px] md:left-[16px] lg:left-[20px] xl:left-[24px] 2xl:left-[30px]"
                    viewBox="0 0 103 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {item.svgPath}
                    <circle
                      cx="51.5"
                      cy="52.3477"
                      r="50.75"
                      stroke="url(#paint1_linear_296_473)"
                      strokeOpacity="0.35"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_296_473"
                        x1="1.5"
                        y1="2.34766"
                        x2="122.143"
                        y2="55.4486"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#151A21" />
                        <stop offset="1" stopColor="#151A21" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_296_473"
                        x1="1.5"
                        y1="2.34766"
                        x2="84.2593"
                        y2="86.9122"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00C8FF" />
                        <stop offset="1" stopColor="#00C8FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3 className="hightreac text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[35px] pb-[10px] sm:pb-[11px] md:pb-[12px] sm:!text-left pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[75px] text-center">
                    {item.title}
                  </h3>
                  <p className="outtrescosn text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-center sm:!text-left">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className='flex itesm-center justify-center pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[56px]'>
            <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center h-[30px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px]  group gap-[7.50px]'>
                    Start building 
              </button>
              </div>
           </div>
        </div>
    );
};

export default Pagetwo;