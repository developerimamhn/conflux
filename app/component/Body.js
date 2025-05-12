import React from 'react';
import Pageone from './Pageone'; 
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import Pagefore from './Pagefore';
import Pageeight from './Pageeight';
import Footer from './Footer';
import Pagefive from './Pagefive';
import Pagesix from './Pagesix';
import Pageseven from './Pageseven';


const Body = () => {
    return (
        <div className='relative overflow-hidden'>
            <Pageone/>
            <Pagetwo/>
            <Pagethree/>
            <Pagefore/>
            <Pagefive/>
            {/* <Pageeight/>
            <Pagesix/>
            <Pageseven/> */}
            <Footer/>
        </div>
    );
};

export default Body;