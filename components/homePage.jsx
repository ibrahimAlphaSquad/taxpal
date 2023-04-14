import React from 'react'
import NavBar from './navBar'
import Image from 'next/image'

function HomePage() {
    return (
        <div className="container mx-auto mb-36">
            <NavBar />
            <div className='flex flex-col justify-center items-center space-y-8 my-36 mx-56'>
                <div className='text-7xl font-bold leading-tight text-slate-900 tracking-tight h-44 max-w-4xl text-center relative'>
                    Accounting <span className='text-blue-600 z-20'>made simple</span> for small businesses.
                    <Image className='absolute top-16 right-16' width={418} height={52} src={'/assets/svg/marker.svg'} alt='marker' />
                </div>
                <p className='text-base font-normal leading-normal text-slate-600 tracking-[-0.01rem] max-w-xl h-12 text-center'>Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.</p>
                <div className='flex flex-row space-x-8 justify-center items-center pt-2'>
                    <button className='text-sm font-medium leading-none text-white bg-blue-600 rounded-3xl cursor-pointer py-3 px-5'>Get 6 months free</button>
                    <button className='text-sm font-medium leading-none text-slate-600 cursor-pointer px-4 py-3 border border-slate-600 rounded-3xl flex flex-row justify-center items-center space-x-2'>
                        <Image className='cursor-pointer' width={10} height={11} src={'/assets/svg/playIcon.svg'} alt='play Icon' />
                        <span>Watch Videos</span>
                    </button>
                </div>
            </div>
            <div>
                <p className='text-base font-medium leading-normal text-slate-900 tracking-[-0.02rem] text-center'>Trusted by these six companies so far</p>
                <div className='flex justify-center space-x-10 mt-8'>
                    <Image width={158} height={48} src={'/assets/svg/transistor.svg'} alt='transistor icon' />
                    <Image width={105} height={48} src={'/assets/svg/statickit.svg'} alt='statickit icon' />
                    <Image width={127} height={48} src={'/assets/svg/tuple.svg'} alt='tuple icon' />
                    <Image width={138} height={48} src={'/assets/svg/mirage.svg'} alt='mirage icon' />
                    <Image width={136} height={48} src={'/assets/svg/laravel.svg'} alt='laravel icon' />
                    <Image width={147} height={48} src={'/assets/svg/statamic.svg'} alt='statamic icon' />
                </div>
            </div>
        </div>
    )
}

export default HomePage