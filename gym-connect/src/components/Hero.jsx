import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
            <p>GET READY TO UNLEASH YOUR</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                Inner <span className='text-blue-400'>Beast</span>
            </h1>
        </div>
        <p className='text-sm md:text-base font-light'>
            By proceeding, I acknowledge that I might become <span className='text-blue-400 font-medium'>immensely powerful</span> and accept the challenge of transforming into a <span className='text-blue-400 font-medium'>fitness titan</span>. I understand that my journey may lead to unparalleled strength and a presence that demands attention.
        </p>
        <button className='px-4 py-4 rounded-md border-[2px] border-blue-400 border-solid blueShadow bg-solid'>
            <p>Accept & Begin</p>
        </button>
    </div>
  )
}
