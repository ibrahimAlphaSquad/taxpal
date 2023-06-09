import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-between align-center px-20'>
      <div className='flex flex-row gap-12 items-center'>
        <Image className='cursor-pointer' width={112} height={40} src={'/assets/svg/navBarLogo.svg'} alt='taxpal logo' />
        <div className='flex flex-row gap-10'>
          <a className='text-sm font-normal leading-3 text-slate-700 cursor-pointer' href='#featureSection'>Features</a>
          <a className='text-sm font-normal leading-3 text-slate-700 cursor-pointer' href='#testimonials'>Testimonials</a>
          <a className='text-sm font-normal leading-3 text-slate-700 cursor-pointer' href='#pricing'>Pricing</a>
        </div>
      </div>
      <div className='flex flex-row gap-8'>
        <button className='text-sm font-normal leading-3 text-slate-700 cursor-pointer'>Sign in</button>
        <button className='text-sm font-medium leading-none text-slate-900 cursor-pointer px-4 py-3 border border-slate-900 rounded-full hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors delay-75'>Get started today</button>
      </div>
    </nav>
  )
}

export default NavBar