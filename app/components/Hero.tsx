'use client'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [screenSize, getDimension] = useState<any>();
    const setDimension = () => {
        getDimension(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])
    const handleScrollDown = () => {
        // Scroll down by 100vh
        window.scrollTo({
            top: window.innerHeight * 1, // 100vh
            behavior: 'smooth', // Optional: Add smooth scrolling animation
        });
    };
    return (
        <div className="h-[95dvh] w-full space-y-5 bg-[url('../assets/h.webp')] bg-no-repeat bg-cover bg-top bg-origin-padding flex justify-center items-center flex-col">
            <div className="bg-gray-900/55 w-full h-full flex justify-start p-20 space-y-4 md:space-y-14 pb-0 pt-32 items-center flex-col">
                <div className="text-4xl md:text-7xl logo font-extralight">PromoPulse</div>
                <div className="font-thin sm:text-3xl md:text-5xl text-sm mt-20">WE WILL TAKE YOUR FITNESS BASED BUISNESS</div>
                <div className='font-thin sm:text-3xl md:text-5xl text-sm'>FROM 10K/M TO 15-20K/M IN 3 MONTHS.</div>

                <div className="font-thin sm:text-3xl md:text-6xl text-lg">And guess what.</div>

                <div className="font-thin sm:text-3xl mb-16 md:text-5xl text-sm">YOU WON'T HAVE TO SPEND A MINUTE IN THE PROCESS.</div>
                <button className='chevron-button' onClick={handleScrollDown}>
                    {screenSize <= 1024 ? <ChevronDown color='white' className='p-0' size={60} /> : <ChevronDown color='white' className='p-0' size={144} />}
                </button>

            </div>
        </div>
    )
}

export default Hero