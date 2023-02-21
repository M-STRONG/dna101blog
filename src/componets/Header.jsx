import React from 'react'
import background from '../images/background.jpg'

const Header = () => {
  return (
    <div className='mt-20'>
     
      <div className='flex flex-col items-center font-serif '>
        <span className='absolute top-20 text-3xl'>Bioinformatcis </span>
        <span className='absolute top-15 text-8xl text-green-700'>BLOG </span>
       
      </div>
   
   
   <img src={background} alt="background" className='w-full h-150 object-cover' />
   
  </div>
  )
}

export default Header
