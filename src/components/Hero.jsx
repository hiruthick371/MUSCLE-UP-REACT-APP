import React from 'react'
import Buttons from './Buttons'

export default function () {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center
    text-center max-w-[800px] w-full mx-auto p-4'>
       <div className='flex flex-col gap-4'> 
      <p className='text-3xl font-semibold'>ITS TIME TO</p>
      <h1 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl
      lg:text-7xl'>Muscle <span className='text-blue-400'>Up</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowledge the terrifying start of my journey to 
        <span className='text-blue-400 font-medium'> Muscle Up </span>
            Soon, I’ll be the local monster everyone fears at the gym. Prepare yourselves, 
            world—these muscles are about to become a<span className='text-blue-400 font-medium'> public menace! </span>
            Let the gains begin, and may the mere sight of me strike fear... or mild amusement!</p>

           <Buttons func={()=>{
            window.location.href ='#generate'
           }} text={"Accept & Begin"}></Buttons>
    </div>



  )
}
