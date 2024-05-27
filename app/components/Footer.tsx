'use client'
import { LucideInstagram, LucideTwitter, TwitterIcon } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const handleScrollHome = () => {
        // Scroll down by 100vh
        const topPosition = document.documentElement.getBoundingClientRect().top;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth', // Optional: Add smooth scrolling animation
        });
    };

    const handleScrollContact = () => {
        window.scrollTo({
            top: window.innerWidth * 0.84,
            behavior: 'smooth', // Optional: Add smooth scrolling animation
        });
    }

    return (
        <div className='bg-[#000000e7] backdrop-blur-sm w-full h-[15dvh] p-6 flex justify-center items-center flex-col'>
            <div className='flex w-full justify-between p-2'>
                <div className='flex w-1/2 justify-evenly'>
                    <button className='hover:text-white/80' onClick={handleScrollHome}>Home</button>
                    <button className='hover:text-white/80' onClick={handleScrollContact}>Contact Us</button>
                </div>
                <div className='w-1/4 flex justify-evenly'>
                    <Link href={'https://www.instagram.com/promopulse_official'}>
                        <button className=''><LucideInstagram className='hover:text-white/80' /></button>
                    </Link>
                    <Link href={'https://x.com/i/flow/login?redirect_after_login=%2Fpromopuls3'}>
                        <button className=''><LucideTwitter className='hover:text-white/80' /></button>
                    </Link>
                </div>
            </div>
            <div className='w-fit'>© {new Date().getFullYear()} Einars</div>
        </div>
    )
}

export default Footer