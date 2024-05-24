import { LucideInstagram, LucideTwitter, TwitterIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black w-full h-[15dvh] p-6 flex justify-center items-center flex-col'>
            <div className='flex w-full justify-between p-2'>
                <div className='flex w-1/2 justify-evenly'>
                    <button className='hover:text-white/80'>Home</button>
                    <button className='hover:text-white/80'>Contact Us</button>
                </div>
                <div className='w-1/4 flex justify-evenly'>
                    <button className=''><LucideInstagram className='hover:text-white/80' href='' /></button>
                    <button className=''><LucideTwitter className='hover:text-white/80' href='' /></button>
                </div>
            </div>
            <div className='w-fit'>© {new Date().getFullYear()} Einars</div>
        </div>
    )
}

export default Footer