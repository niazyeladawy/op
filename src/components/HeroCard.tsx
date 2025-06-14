import React from 'react'

const HeroCard = () => {
    return (
        <div className="relative h-full">
            {/* Background image */}
            <div className=" w-full h-full">
                <picture>
                    <source media="(min-width: 1024px)" srcSet="/images/hero.webp" />
                    <source media="(min-width: 640px)" srcSet="/images/hero.webp" />
                    <img
                        src="/images/hero.webp"
                        alt="Background"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </picture>
            </div>
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Content */}
            {/* <Container className='h-full'>
                <div className="relative z-10 text-white flex h-full flex-col pt-[80px] pb-5">
                    <div>
                        <h2 className="text-5xl text-balance font-bold mb-6">
                            DISCOVER YOUR MOST COMFORT PLACE FOR YOUR FUTURE LIFE
                        </h2>

                        <div className='flex justify-between items-center'>


                            <ul className="flex gap-8 mb-6 backdrop-blur-md bg-transparent  p-10 rounded-xl items-center">
                                <li className='flex gap-4 items-center'>
                                    <strong className="block text-4xl">5+</strong>
                                    <span className='text-sm border-r pe-3 border-white '>POPULAR <br /> AREAS</span>
                                </li>
                                <li className='flex gap-4 items-center'>
                                    <span className='text-sm'>Projects</span>
                                    <strong className="block text-4xl border-l ps-3 border-white">11+</strong>
                                </li>
                                <li className='flex gap-4 items-center'>
                                    <span className='text-sm border-r pe-3 border-white'>Years <br /> Experience</span>
                                    <strong className="block text-4xl ">5+</strong>
                                </li>
                            </ul>

                            <a href="#" className="bg-sec py-2 px-4 text-sm cursor-pointer rounded-full flex items-center gap-2">
                                All projects <ArrowRight width={15} />
                            </a>
                        </div>
                    </div>
                    <div className='mt-auto backdrop-blur-md bg-transparent p-5 rounded-xl'>
                        <form >
                            <div className='flex items-center gap-5'>
                                <ul className="flex bg-white w-fit text-black p-[1px] rounded-full">
                                    <li>
                                        <input
                                            type="radio"
                                            name="radio"
                                            id="div11"
                                            defaultChecked
                                            className="hidden peer"
                                        />
                                        <label htmlFor="div11" className="peer-checked:bg-main peer-checked:text-white cursor-pointer uppercase block py-2 px-4 rounded-full text-sm font-bold">
                                            for Sale
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            name="radio"
                                            id="div12"
                                            value="div-2"
                                            className="hidden peer"
                                        />
                                        <label htmlFor="div12" className="peer-checked:bg-main peer-checked:text-white cursor-pointer uppercase block py-2 px-4 rounded-full text-sm font-bold">
                                            for Rent
                                        </label>
                                    </li>

                                </ul>
                                <button className='cursor-pointer flex items-center gap-2 border-b border-white'> <RotateCcw width={16} /> reset</button>

                            </div>

                            <div className='flex gap-2 mt-3'>
                                <div className="relative w-full max-w-md">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <Input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-10 bg-white" // Padding to avoid overlap with icon
                                    />
                                </div>

                                <SelectInput   />
                                <SelectInput   />
                                <SelectInput   />
                                <SelectInput   />
                                <button type='submit' className='bg-sec py-2 px-4 text-sm cursor-pointer rounded-full'>search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container> */}
        </div>
    )
}

export default HeroCard
