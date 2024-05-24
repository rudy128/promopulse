'use client'
import React, { useEffect, useState } from 'react'

const Nav = () => {
    const [showNavbar, setShowNavbar] = useState(false); // Initialize state to false

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const threshold = window.innerHeight * 0.05; // Set the threshold to 25% of the viewport height

            if (currentScrollPos >= threshold) {
                // Scrolled beyond the threshold: Show the div
                console.log(true)
                setShowNavbar(true);
            } else {
                // Scrolled back above the threshold: Hide the div
                console.log(false)
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`w-full ${showNavbar ? `sticky top-0 left-0 z-50` : `hidden`} `}>
            <div className=' h-[7dvh] w-full bg-black flex justify-evenly items-center'>
                <div className='font-extrabold hover:text-white/85 cursor-pointer text-2xl'>PromoPulse</div>
                <div className='flex justify-evenly w-4/12 items-center'><div>Home</div></div>
                <button className='border border-white p-2 rounded-xl hover:text-gray-900 hover:bg-white'>Contact Us</button>
            </div>
        </div>
    )
}

export default Nav