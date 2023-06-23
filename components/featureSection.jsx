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
        <div id='featureSection' className="bg-[url('/assets/svg/featureSectionBg.svg')] py-20 bg-no-repeat bg-cover bg-center flex flex-col gap-24">
            <div className='flex flex-col justify-center items-center gap-6 text-white'>
                <p className='text-5xl font-semibold tracking-tight leading-none'>Everything you need to run your books.</p>
                <p className='text-base font-normal leading-normal text-white/80'>Well everything you need if you aren’t that picky about minor details like tax compliance.</p>
            </div>
            <div className='flex w-full justify-between gap-56'>
                <div className='flex flex-col gap-3'>
                    {featureList.map((_payroll, idx) => {
                        return (
                            <div className='text-white p-6 box-border rounded-xl h-32 w-full hover:bg-white/10 hover:border hover:border-white/25' key={idx}>
                                <p className='text-xl font-medium leading-6 tracking-[-0.02rem]'>{_payroll.title}</p>
                                <p className='text-sm font-normal leading-normal tracking-[-0.01rem] break-words'>{_payroll.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='max-w-[787px] w-full max-h-[528px] h-full'>
                    <Image width={787} height={528} src={'/assets/images/featureSectionPayroll.png'} alt='payroll' />
                </div>
            </div>
        </div>
    )
}

export default FeatureSection