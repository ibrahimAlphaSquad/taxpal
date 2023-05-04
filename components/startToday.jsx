import React from 'react'

function StartToday() {
    return (
        <div className="bg-[url('/assets/images/backgroundFeatures.png')] pt-[110px] pb-[134px] flex justify-center items-center bg-no-repeat bg-cover">
            <div className="flex flex-col w-full max-w-[498px] items-center text-white">
                <h1 className='text-[38px] font-normal -tracking-[0.01rem] leading-[81px] lexend-font'>Get started today</h1>
                <p className="text-center text-[17px] font-normal -tracking-[0.01rem] leading-[30px] mt-1 mb-[38px]">It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.</p>
                <button className="text-center text-sm font-semibold -tracking-[0.01rem] leading-[17px] text-gray-900 px-4 py-3 bg-white rounded-3xl">Get 6 months free</button>
            </div>
        </div>
    )
}

export default StartToday