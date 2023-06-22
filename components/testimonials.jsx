import Image from 'next/image'
import React from 'react'

function Testimonials() {
    const testimonialsData = [
        {
            description: "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
            author: "Sheryl Berge",
            designation: "CEO at Lynch LLC",
            picture: "avatar-1"
        },
        {
            description: "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
            author: "Leland Kiehn",
            designation: "Founder of Kiehn and Sons",
            picture: "avatar-2"
        },
        {
            description: "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
            author: "Peter Renolds",
            designation: "Founder of West Inc",
            picture: "avatar-3"
        },
        {
            description: "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
            author: "Amy Hahn",
            designation: "Director at Velocity Industries",
            picture: "avatar-4"
        },
        {
            description: "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
            author: "Erin Powlowski",
            designation: "COO at Armstrong Inc",
            picture: "avatar-5"
        },
        {
            description: "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
            author: "Amy Hahn",
            designation: "Director at Velocity Industries",
            picture: "avatar-1"
        },
    ]

    return (
        <div id='testimonials' className='flex flex-col justify-center items-center space-y-[77px] my-[118px] px-[250px]'>
            <div>
                <h1 className='lexend-font leading-[81px] -tracking-[0.38px] text-[38px] text-gray-900 text-center'>Loved by businesses worldwide.</h1>
                <p className='leading-[30px] text-[17px] -tracking-[0.17px] text-gray-600 w-[640px] text-center'>Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.</p>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                {
                    testimonialsData.map((_test, idx) => {
                        return (
                            <div className='flex flex-col space-y-[29px] h-fit w-fit shadow-xl rounded-[10px] p-5' key={idx}>
                                <p className='w-full max-w-[330px] text-[17px] leading-[31px] -tracking-[0.16px] text-gray-700'>{_test.description}</p>
                                <hr />
                                 <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='lexend-font text-base font-medium -tracking-[0.32px] text-gray-900'>{_test.author}</p>
                                        <p className='text-sm -tracking-[0.14px] leading-[25px] text-gray-400'>{_test.designation}</p>
                                    </div>
                                    <Image width={56} height={56} src={`/assets/images/${_test.picture}.png`} alt={_test.picture} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Testimonials