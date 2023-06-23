import Image from 'next/image'
import React, { useState } from 'react'

function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState("$15")

    const pricingData = [
        {
            price: "$9",
            title: "Starter",
            description: "Good for anyone who is self-employed and just getting started.",
            cta: "Get started",
            benfits: [
                "Send 10 quotes and invoices",
                "Connect up to 2 bank accounts",
                "Track up to 15 expenses per month",
                "Manual payroll support",
                "Export up to 3 reports"
            ]
        },
        {
            price: "$15",
            title: "Small business",
            description: "Perfect for small / medium sized businesses.",
            cta: "Get started",
            benfits: [
                "Send 25 quotes and invoices",
                "Connect up to 5 bank accounts",
                "Track up to 50 expenses per month",
                "Automated payroll support",
                "Export up to 12 reports",
                "Bulk reconcile transactions",
                "Track in multiple currencies"
            ]
        },
        {
            price: "$39",
            title: "Enterprise",
            description: "For even the biggest enterprise companies.",
            cta: "Get started",
            benfits: [
                "Send unlimited quotes and invoices",
                "Connect up to 15 bank accounts",
                "Track up to 200 expenses per month",
                "Automated payroll support",
                "Export up to 25 reports, including TPS"
            ]
        },
    ]

    return (
        <div id='pricing' className='flex flex-col justify-center items-center space-y-[77px] py-[118px] px-[250px] bg-[#10172A]'>
            <div className='text-white flex flex-col justify-center items-center'>
                <h1 className='lexend-font text-4xl leading-[81px] -tracking-[0.76px]'>Simple pricing, for everyone.</h1>
                <p className='text-base leading-[30px] -tracking-[0.17px] text-white opacity-60'>It doesn’t matter what size your business is, our software won’t work well for you.</p>
            </div>
            <div className='flex justify-center items-center space-x-8'>
                {
                    pricingData.map((_price, idx) => {
                        return (
                            <div onClick={() => { setSelectedPlan(_price.price) }} key={idx} className={`text-white flex flex-col justify-center items-start p-[30px] rounded-[20px] cursor-pointer w-full max-w-sm h-full ${selectedPlan === _price.price ? "bg-blue-600" : ""}`}>
                                <p className='lexend-font text-[45px] -tracking-[0.45px] mb-6'>{_price.price}</p>
                                <p className='lexend-font text-lg -tracking-[0.54px] font-medium mb-3'>{_price.title}</p>
                                <p className='text-base leading-[29px] -tracking-[0.3px] mb-7'>{_price.description}</p>
                                <button className={`${selectedPlan === _price.price ? "bg-white text-black" : " border border-white/80"} px-4 py-3 w-full rounded-[50px] mb-9`}>{_price.cta}</button>
                                <div className=' h-full max-h-60'>
                                    {
                                        _price.benfits.map((_benfit, idx2) => {
                                            return (
                                                <div key={idx2} className={`flex justify-start items-center gap-2`}>
                                                    <div className={`flex justify-center items-center gap-2`}>
                                                        <Image src={"assets/svg/check-circle.svg"} alt='check-circle' width={24} height={24} />
                                                        <p className='text-sm leading-7 -tracking-[0.14px]'>{_benfit}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pricing