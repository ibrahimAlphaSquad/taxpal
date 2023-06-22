import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-between align-middle px-20'>
      <div className='flex flex-row space-x-14'>
        <Image className='cursor-pointer' width={109} height={40} src={'/assets/svg/navBarLogo.svg'} alt='taxpal logo' />
        <div className='flex flex-row my-3 space-x-10 justify-center align-middle'>
          <a className='text-sm font-normal leading-3 text-slate-700 cursor-pointer' href='#featureSection'>Features</a>
          <a className='text-sm font-normal leading-3 text-slate-700 cursor-pointer' href='#testimonials'>Testimonials</a>
          <a className='text-sm font-normal leading-3 text-slate-700 cursor-pointer' href='#pricing'>Pricing</a>
        </div>
      </div>
      <div className='flex flex-row space-x-8'>
        <button className='text-sm font-normal leading-3 text-slate-700 cursor-pointer'>Sign in</button>
        <button className='text-sm font-medium leading-none text-slate-900 cursor-pointer px-4 py-3 border border-slate-900 rounded-3xl hover:text-white hover:bg-blue-600 hover:border-blue-600'>Get started today</button>
      </div>
    </nav>
  )
}

export default NavBar