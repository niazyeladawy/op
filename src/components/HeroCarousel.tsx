"use client"
import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Container from "./Container"
import HeroCard from "./HeroCard"
import { ArrowRight, RotateCcw, Search, SlidersHorizontal } from "lucide-react"
import { Input } from "./ui/input"
import { SelectInput } from "./Select"
import MainButton from "./MainButton"
import { ArrowLeftIcon, ArrowRightIcon } from "./icons/CustomIcon"
import { SelectItem } from "./ui/select"


export function HeroCarousel() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className="hero-banner relative flex flex-col">

            <Carousel autoplay autoplayInterval={4000} infinite className="   absolute inset-0 w-full h-full ">
                <CarouselContent className="h-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem className="h-full pl-0" key={index}>
                            <HeroCard />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute inset-0 z-[100]  w-full h-full ">
                    <Container className="relative h-full">

                    <CarouselPrevious className="left-5  lg:left-[-50px] 2xl:left-[0]  backdrop-blur-md bg-black/30 hover:bg-black/30 border-none w-9 h-9 lg:w-12 lg:h-12  text-white hover:text-white [&>svg]:!w-5 [&>svg]:!h-5 lg:[&>svg]:!w-7 lg:[&>svg]:!h-7" ><ArrowLeftIcon /></CarouselPrevious>

                    <CarouselNext className="backdrop-blur-lg bg-black/30 hover:bg-black/30 border-none w-9 h-9 lg:w-12 lg:h-12  text-white hover:text-white [&>svg]:!w-5 [&>svg]:!h-5 lg:[&>svg]:!w-7 lg:[&>svg]:!h-7 right-5  lg:right-[-50px] 2xl:right-[0]" ><ArrowRightIcon /></CarouselNext>
                    </Container>
                </div>



            </Carousel>
            <div className='h-full grow flex flex-col '>
                <Container className='h-full grow flex flex-col'>
                    <div className=" text-white flex h-full flex-col pt-[40px] pb-5 grow">
                        <div>
                            <h2 className="text-xl text-center lg:text-left lg:text-[40px] text-balance font-semibold mb-6 relative  z-[100]">
                                DISCOVER YOUR MOST COMFORT <br /> PLACE FOR YOUR FUTURE LIFE
                            </h2>

                            <div className='flex justify-center lg:justify-between items-center'>


                                <ul className="hidden lg:flex gap-8 mb-6 lg:mb-0 backdrop-blur-md bg-transparent p-10 rounded-xl items-center">
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

                                <div className="relative z-[100]">

                                    <MainButton>All projects <ArrowRight width={15} /></MainButton>
                                </div>

                            </div>
                        </div>
                        <form className="relative mt-auto " >
                            <ul className=" flex lg:hidden bg-white w-fit text-black p-1 rounded-full relative z-[100] justify-center mx-auto mb-4">
                                <li>
                                    <input
                                        type="radio"
                                        name="df"
                                        id="div13"
                                        defaultChecked
                                        className="hidden peer"
                                    />
                                    <label htmlFor="div13" className="peer-checked:bg-main peer-checked:text-white cursor-pointer uppercase block py-2 px-4 rounded-full text-sm font-bold">
                                        for Sale
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        name="df"
                                        id="div14"
                                        value="div-2"
                                        className="hidden peer"
                                    />
                                    <label htmlFor="div14" className="peer-checked:bg-main peer-checked:text-white cursor-pointer uppercase block py-2 px-4 rounded-full text-sm font-bold">
                                        for Rent
                                    </label>
                                </li>

                            </ul>
                            <div className='w-[calc(100%+32px)] left-[-16px] lg:left-0 lg:w-auto mt-auto  p-5 rounded-xl relative z-[100]'>

                                <div className="backdrop-blur-md bg-transparent absolute inset-0 z-[-1]"></div>

                                <div className='flex items-center gap-5'>
                                    <ul className="hidden lg:flex bg-white w-fit text-black p-[1px] rounded-full">
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
                                    <button className='cursor-pointer lg:flex items-center gap-2 border-b border-white hidden'> <RotateCcw width={16} /> reset</button>

                                </div>

                                <div className='relative lg:static flex flex-row  lg:flex-row gap-2 mt-3'>
                                    <div className="relative w-full max-w-md z-[100]">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <Input
                                            type="text"
                                            placeholder="Search..."
                                            className="pl-10 bg-white py-5" // Padding to avoid overlap with icon
                                        />
                                    </div>
                                    <SelectInput placeholder="Property Type" className="py-5 min-w-[250px] hidden lg:flex">
                                        <SelectItem value="apartment">Apartment</SelectItem>
                                        <SelectItem value="villa">Villa</SelectItem>
                                        <SelectItem value="townhouse">Townhouse</SelectItem>
                                        <SelectItem value="penthouse">Penthouse</SelectItem>
                                        <SelectItem value="duplex">Duplex</SelectItem>
                                        <SelectItem value="studio">Studio</SelectItem>
                                    </SelectInput>
                                    <SelectInput className="py-5 hidden lg:flex" placeholder="Bedrooms">
                                        <SelectItem value="studio">Studio</SelectItem>
                                        <SelectItem value="1">1 Bedroom</SelectItem>
                                        <SelectItem value="2">2 Bedrooms</SelectItem>
                                        <SelectItem value="3">3 Bedrooms</SelectItem>
                                        <SelectItem value="4">4+ Bedrooms</SelectItem>
                                    </SelectInput>

                                    <SelectInput className="py-5 hidden lg:flex" placeholder="Property Size">
                                        <SelectItem value="under-500">Under 500 sqft</SelectItem>
                                        <SelectItem value="500-1000">500–1000 sqft</SelectItem>
                                        <SelectItem value="1000-1500">1000–1500 sqft</SelectItem>
                                        <SelectItem value="1500-2000">1500–2000 sqft</SelectItem>
                                        <SelectItem value="2000-plus">2000+ sqft</SelectItem>
                                    </SelectInput>

                                    <SelectInput className="py-5 hidden lg:flex" placeholder="Price">
                                        <SelectItem value="under-500k">Under 500K</SelectItem>
                                        <SelectItem value="500k-1m">500K – 1M</SelectItem>
                                        <SelectItem value="1m-2m">1M – 2M</SelectItem>
                                        <SelectItem value="2m-5m">2M – 5M</SelectItem>
                                        <SelectItem value="5m-plus">5M+</SelectItem>
                                    </SelectInput>

                                    {/* <SelectInput className="py-5 min-w-[250px] hidden lg:flex" />
                                    <SelectInput className="py-5 hidden lg:flex" />
                                    <SelectInput className="py-5 hidden lg:flex" />
                                    <SelectInput className="py-5 hidden lg:flex" /> */}
                                    <button type="button" className="lg:hidden p-2 bg-white rounded-sm text-black" onClick={() => setMenuOpen(!menuOpen)}><SlidersHorizontal /></button>
                                    <button type='submit' className='bg-sec px-2 py-2 lg:px-4 text-sm cursor-pointer rounded-full relative  z-[1000000000] shrink-0 min-w-[42px]'><span className="hidden lg:inline-block">search </span><Search className="lg:hidden" /></button>

                                    {
                                        menuOpen &&
                                        <div className="lg:hidden absolute bottom-[55px]  w-full flex flex-col gap-3 bg-white p-3 rounded-sm">

                                            <SelectInput placeholder="Property Type" className="py-5  w-full">
                                        <SelectItem value="apartment">Apartment</SelectItem>
                                        <SelectItem value="villa">Villa</SelectItem>
                                        <SelectItem value="townhouse">Townhouse</SelectItem>
                                        <SelectItem value="penthouse">Penthouse</SelectItem>
                                        <SelectItem value="duplex">Duplex</SelectItem>
                                        <SelectItem value="studio">Studio</SelectItem>
                                    </SelectInput>
                                    <SelectInput className="py-5  w-full" placeholder="Bedrooms">
                                        <SelectItem value="studio">Studio</SelectItem>
                                        <SelectItem value="1">1 Bedroom</SelectItem>
                                        <SelectItem value="2">2 Bedrooms</SelectItem>
                                        <SelectItem value="3">3 Bedrooms</SelectItem>
                                        <SelectItem value="4">4+ Bedrooms</SelectItem>
                                    </SelectInput>

                                    <SelectInput className="py-5  w-full" placeholder="Property Size">
                                        <SelectItem value="under-500">Under 500 sqft</SelectItem>
                                        <SelectItem value="500-1000">500–1000 sqft</SelectItem>
                                        <SelectItem value="1000-1500">1000–1500 sqft</SelectItem>
                                        <SelectItem value="1500-2000">1500–2000 sqft</SelectItem>
                                        <SelectItem value="2000-plus">2000+ sqft</SelectItem>
                                    </SelectInput>

                                    <SelectInput className="py-5  w-full" placeholder="Price">
                                        <SelectItem value="under-500k">Under 500K</SelectItem>
                                        <SelectItem value="500k-1m">500K – 1M</SelectItem>
                                        <SelectItem value="1m-2m">1M – 2M</SelectItem>
                                        <SelectItem value="2m-5m">2M – 5M</SelectItem>
                                        <SelectItem value="5m-plus">5M+</SelectItem>
                                    </SelectInput>
                                        </div>
                                    }
                                </div>

                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </div>

    )
}
