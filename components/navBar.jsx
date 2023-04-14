import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-between align-middle'>
      <div className='flex flex-row space-x-14'>
        <Image className='cursor-pointer' width={109} height={40} src={'/assets/svg/navBarLogo.svg'} alt='taxpal logo' />
        <div className='flex flex-row my-3 space-x-10 justify-center align-middle'>
          <p className='text-sm font-normal leading-3 text-slate-700 cursor-pointer'>Features</p>
          <p className='text-sm font-normal leading-3 text-slate-700 cursor-pointer'>Testimonials</p>
          <p className='text-sm font-normal leading-3 text-slate-700 cursor-pointer'>Pricing</p>
        </div>
      </div>
      <div className='flex flex-row space-x-8'>
        <button className='text-sm font-normal leading-3 text-slate-700 cursor-pointer'>Sign in</button>
        <button className='text-sm font-medium leading-none text-slate-900 cursor-pointer px-4 py-3 border border-slate-900 rounded-3xl hover:text-white hover:bg-blue-600 hover:border-0'>Get started today</button>
      </div>
    </nav>
  )
}

export default NavBar