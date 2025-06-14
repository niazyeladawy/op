import { Bath, Bed, HeartIcon, MapPin, RulerDimensionLine } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { ArrowLeftIcon, ArrowRightIcon, WhatsAppIcon } from "./icons/CustomIcon"

const PropertyCard = () => {
  return (
    <div className="w-full prop__card-wrapper rounded-lg overflow-hidden">
      <div className="relative ">
        <Carousel className="w-full h-full" slidesPerView={1} infinite>
          <CarouselContent className="h-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className="h-full" key={index}>
                <div className="aspect-[16/12] w-full overflow-hidden  bg-gray-200">
                  <img
                    src={`https://www.oiaproperties.com//uploads/properties/eOP78f6ELoN7uOysW52hZSLfhjKcrQylja9RYhzj_watermarked.webp`}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-6 z-[15] backdrop-blur-lg bg-black/30 hover:bg-black/30 border-none text-white hover:text-white" ><ArrowLeftIcon/></CarouselPrevious>
          <CarouselNext className="right-6 z-[15] backdrop-blur-lg bg-black/30 hover:bg-black/30 border-none text-white hover:text-white" ><ArrowRightIcon/></CarouselNext>
        </Carousel>
        <div className="absolute inset-0 flex flex-col px-4 md:px-3 p-3  ">
          <div>
            <div className="flex items-center justify-between" >
              <span className="block py-2 px-3 bg-sec rounded-sm text-white w-fit capitalize text-sm">for sale</span>
              <button className="w-[30px] h-[30px] bg-main2 rounded-full flex items-center justify-center"><HeartIcon className="text-sec cursor-pointer" width={16} /></button>
            </div>
            <span className="mt-3 block w-fit  py-2 px-3 capitalize text-sm bg-black/30 rounded-md text-white">property type</span>
          </div>
          <span className="mt-auto block py-2 px-3  text-white w-fit capitalize text-sm">$1.249.000</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2 uppercase">Building name</h4>
        <span className="flex items-center gap-2 text-mute text-sm mb-2" > <MapPin className="text-sec" width={16} /> Dubai,Yas</span>
        <ul className="flex gap-2 mb-3">
          <li className="flex items-center gap-2 border-r border-gray pe-2"><Bed className="text-sec" width={16} /> <span className="font-semibold capitalize">3 Bed</span></li>
          <li className="flex items-center gap-2 border-r border-gray pe-2"><Bath className="text-sec" width={16} /><span className="font-semibold capitalize">3 bath</span></li>
          <li className="flex items-center gap-2"><RulerDimensionLine className="text-sec" width={16} /> <span className="font-semibold uppercase">1.414 ft</span></li>
        </ul>

        <ul className="grid grid-cols-3 gap-2 pb-4 mb-4 border-b border-mute">
          <li><a className=" text-center border-main2 border capitalize rounded-sm p-1 font-medium text-main2 flex items-center justify-center " href=""> <WhatsAppIcon color="#25D366" /></a></li>
          <li><a className="block text-center border-main2 border capitalize rounded-sm p-1 font-medium text-main2" href="">call</a></li>
          <li><a className="block text-center border-main2 border capitalize rounded-sm p-1 font-medium text-main2" href="">email</a></li>
        </ul>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full" src="https://placehold.co/100x100/EEE/31343C" alt="" />
            <span className="font-medium capitalize">jane smith</span>
          </div>
          <a href="" className="py-[6px] px-4 text-sec rounded-full border border-sec">details</a>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
