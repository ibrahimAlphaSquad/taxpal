import Image from 'next/image'
import React from 'react'

import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

function BusinessTasks() {
    // console.log("inter", inter);
    const data = [
        {
            icon: "/assets/svg/businessTasksVector.svg",
            alt: "Reporting",
            title: "Stay on top of things with always up-to-date reporting features.",
            desc: "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity."
        },
        {
            icon: "/assets/svg/businessTasksVector.svg",
            alt: "Reporting",
            title: "Stay on top of things with always up-to-date reporting features.",
            desc: "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity."
        },
        {
            icon: "/assets/svg/businessTasksVector.svg",
            alt: "Reporting",
            title: "Stay on top of things with always up-to-date reporting features.",
            desc: "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity."
        },
    ]

    return (
        <div className={`mt-[247px] mb-[88px] px-[88px] py-[109px] ${inter.variable}`}>
            <div className='flex flex-col justify-center items-center space-y-4'>
                <h1 className='text-[38px] font-normal -tracking-widest leading-[81px]'>Simplify everyday business tasks.</h1>
                <p className='text-[17px] font-normal -tracking-widest leading-[30px]'>Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.</p>
            </div>
            <div className='flex flex-row justify-center items-center space-x-5 px-10'>
                {data.map((_item, key) => {
                    return (
                        <div className='flex flex-col space-y-[5px]' key={key}>
                            <Image className='bg-blue-500 px-[5px] py-[6px] rounded-md' width={24} height={18} src={_item.icon} alt={_item.alt} />
                            <p className='text-blue-500 text-sm font-normal leading-[30px] -tracking-widest'>{_item.alt}</p>
                            <p className='text-gray-900 text-xl font-normal -tracking-[0.02em] leading-[30px]'>{_item.title}</p>
                            <p className='text-gray-700 text-sm font-normal -tracking-[0.02em] leading-[25px]'>{_item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BusinessTasks