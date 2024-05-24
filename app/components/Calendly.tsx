"use client"
import React from 'react'
import { InlineWidget } from 'react-calendly'

export default function page() {
  return (
    <>
      <div className='bg-white text-4xl lg:text-7xl font-semibold p-6 text-black w-full flex justify-center'><span>Time to take <strong className='underline'>The Next</strong> step</span></div>
      <div className='bg-white w-full md:flex justify-center items-center p-10 space-y-6 md:space-y-0 m-0'>
        <InlineWidget url={'https://calendly.com/official-promopulse/30min'} pageSettings={{ backgroundColor: 'ffffff', textColor: '000000', primaryColor: 'a400ff' }} styles={{ height: '850px', minHeight: '0px', minWidth: "70%", paddingRight: "0px", paddingLeft: "0px", marginTop: "0px", marginBottom: "0px" }} />
        <div className='relative text-black text-lg border shadow-md rounded-2xl h-fit m-6 pl-5 pt-5 pb-4 pr-3 flex flex-col mr-5'>
          <h1><span className='font-bold text-3xl'>C</span>hange can be uncomfortable and difficult at times</h1>
          <h1>We had the same experience with our brand. think of it as a midlife crisis, but without the sports car.</h1>
          <h1>But it worked out in the end.</h1>
          <h1>A risk is needed to be better in anything whether it be big or small,</h1>
          <h1>And you know it because you took a risk to get where you are now.</h1>
          <h1>Just remember, </h1>
          <h1 className='mb-5'>You're only one click away.</h1>
          <h1 className='absolute bottom-2 right-3'>~ Einars Petersons</h1>
        </div>
      </div>
    </>
  )
}
