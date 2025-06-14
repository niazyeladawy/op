import React from 'react'
import MainButton from './MainButton'
import Image from 'next/image'

const OFFPlanCard = () => {
    return (
        <div>
            <div className='px-4 md:px-0'> <h3 className='text-center font-bold text-xl md:text-3xl uppercase text-main2 mb-[50px]'>saadiyat lagoons</h3>
                <ul className='w-[calc(100%+32px)] left-[-16px] md:left-0 relative md:w-full flex justify-center gap-4 mb-10 whitespace-nowrap overflow-auto'>
                    <li className='text-main uppercase text-xl font-medium'>4 bhk villa + maid's </li>
                    <li className='text-main uppercase text-xl font-medium'>5 bhk villa + maid's </li>
                    <li className='text-main uppercase text-xl font-medium'>6 bhk villa + maid's </li>
                </ul></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden">
                <div className='bg-white border-mute p-6 l flex flex-col justify-center shadow-2xl'>
                    <p className='text-gray2 font-medium mb-10'>Explore The Adventure Park, Stroll Across The Stunning Eco-corniche, Soak In Unparalleled Cultural Experiences—in A Choice Of 4 To 6-bed Villas Surrounded By Over 900,000m2 Of Protected Wilderness.</p>
                    <ul className='mb-6 text-gray2 flex flex-col gap-2'>

                        <li><strong className='capitalize'>starting prices: </strong> <span className='font-semibold text-sec uppercase'>aed 6,200,000</span></li>
                        <li><strong className='capitalize'>number of bedrooms: </strong> <span className='font-semibold text-sec uppercase'> 4, 5, 6</span></li>
                        <li><strong className='capitalize'>area size form: </strong> <span className='font-semibold text-sec uppercase'> 4,960 sq.ft</span></li>
                    </ul>
                    <MainButton className='w-full md:w-fit'>book your property</MainButton>

                </div>
                <div>
                    <Image className='w-full h-full object-cover' src="https://placehold.co/600x400/EEE/31343C" width={600} height={600} alt="Placeholder image" />
                </div>
            </div>
        </div>
    )
}

export default OFFPlanCard