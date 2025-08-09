import React from 'react'

const Cta = () => {
  return (
    <section className='bg-[#272757] text-white flex flex-col text-center justify-center py-10'   style={{
        backgroundImage:
          "linear-gradient(to left, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.2) 100%, rgba(0,0,0,0)), url('/partner-hero.jpg')"
      }}>
        <div className='max-w-2xl mx-auto space-y-4'>
            <h1 className='text-5xl font-semibold leading-[4rem]'> <span className='bg-clip-text text-transparent bg-gradient-to-br from-[#0f0e47] to-yellow-500 '>Millions in </span>sponsorships paid  out to 
            
               
            <span className='bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 to-[#0f0647] '> creators</span></h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium, amet in necessitatibus 

            </p>

        </div>
    </section>
  )
}

export default Cta