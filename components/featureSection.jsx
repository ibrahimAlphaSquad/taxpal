import Image from 'next/image'
import React from 'react'

function FeatureSection() {
    const featureList = [
        {
            title: "Payroll",
            description: "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported."
        },
        {
            title: "Claim expenses",
            description: "All of your receipts organized into one place, as long as you don't mind typing in the data by hand."
        },
        {
            title: "VAT handling",
            description: "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need."
        },
        {
            title: "Reporting",
            description: "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it."
        }
    ]

    return (
        <div className="bg-[url('/assets/svg/featureSectionBg.svg')] py-20">
            <div className='flex flex-col justify-center items-center space-y-6 text-white'>
                <p className='text-5xl font-medium leading-none tracking-[-0.02rem]'>Everything you need to run your books.</p>
                <p className='text-base font-normal leading-normal tracking-[-0.01rem]'>Well everything you need if you aren’t that picky about minor details like tax compliance.</p>
            </div>
            <div className='flex flex-row pl-20 mt-20 w-full justify-between space-x-20'>
                <div className='flex flex-col space-y-3'>
                    {featureList.map((_payroll, idx) => {
                        return (
                            <div className='text-white p-6 box-border rounded-xl h-32 w-[493px] hover:bg-white/10 hover:border hover:border-white/25' key={idx}>
                                <p className='text-xl font-medium leading-6 tracking-[-0.02rem]'>{_payroll.title}</p>
                                <p className='text-sm font-normal leading-normal tracking-[-0.01rem]'>{_payroll.description}</p>
                            </div>
                        )
                    })}
                </div>
                <Image width={787} height={528} src={'/assets/images/featureSectionPayroll.png'} alt='payroll' />
            </div>
        </div>
    )
}

export default FeatureSection