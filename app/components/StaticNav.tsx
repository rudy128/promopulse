'use client'
import React from 'react'

const StaticNav = () => {
    const handleScrollDown = () => {
        // Scroll down by 100vh
        window.scrollTo({
            top: window.innerHeight * 1, // 100vh
            behavior: 'smooth', // Optional: Add smooth scrolling animation
        });
    };
    return (
        <div className='bg-black h-[5dvh] flex justify-between items-center w-full px-10 p-6'>
            <button className="hover:text-white/80">Home</button>
            <button className="rounded-lg border p-1 px-3 hover:bg-white hover:text-black font-bold border-white" onClick={handleScrollDown}>Book a Slot now!</button>
        </div>
    )
}

export default StaticNav