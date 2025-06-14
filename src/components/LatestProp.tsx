import { ChevronLeft, ChevronRight } from "lucide-react"
import Container, { LeftAlignedFullWidth } from "./Container"
import PropertyCard from "./PropertyCard"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import MiddleCarousel from "./ui/MiddleCarousel"

const LatestProp = () => {
    return (
        <section className="py-6 mt-10">
            {/* <Container>
                <h2 className="title mb-6">latest properties</h2>

                <Tabs defaultValue="account">
                    <TabsList className="mb-6 overflow-hidden h-fit">
                        <TabsTrigger value="account" className="px-8 rounded-none text-main uppercase font-semibold cursor-pointer py-3">For Sale</TabsTrigger>
                        <TabsTrigger value="password" className="px-8 rounded-none text-main uppercase font-semibold cursor-pointer py-3">For Rent</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Carousel className="w-full h-full  " slidesPerView={3} >
                            <CarouselContent className="h-full p-[1px]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem className="h-full" key={index}>
                                        <PropertyCard />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-[-40px]" ><ChevronLeft /></CarouselPrevious>

                            <CarouselNext className="right-[-40px]" >
                                <ChevronRight />
                            </CarouselNext>
                        </Carousel>
                    </TabsContent>
                    <TabsContent value="password">
                        <Carousel className="w-full h-full  " slidesPerView={3} >
                            <CarouselContent className="h-full">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem className="h-full" key={index}>
                                        <PropertyCard />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-[-40px]" />
                            <CarouselNext className="right-[-40px]" />
                        </Carousel>
                    </TabsContent>
                </Tabs>


            </Container> */}
            <Container>



                <h2 className="title mb-6">latest properties</h2>
            </Container>
            <LeftAlignedFullWidth>

                <Tabs defaultValue="account">
                    <TabsList className="mb-6 overflow-hidden h-fit">
                        <TabsTrigger value="account" className="px-8  text-main uppercase font-semibold cursor-pointer py-3 border border-main2 rounded-[10px] border-r-0 rounded-tr-none rounded-br-none data-[state=active]:border-sec">For Sale</TabsTrigger>
                        <TabsTrigger value="password" className="px-8  text-main uppercase font-semibold cursor-pointer py-3 border border-main2 rounded-[10px] border-l-0 rounded-tl-none rounded-bl-none data-[state=active]:border-sec">For Rent</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="relative">
                        <MiddleCarousel />
                    </TabsContent>
                    <TabsContent value="password"  className="relative">
                        <MiddleCarousel />
                    </TabsContent>
                </Tabs>
                <div className="flex justify-center mt-4 md:hidden">
                    <a href="" className="block text-center border-main2 border capitalize rounded-full p-1 px-4  font-medium text-main2 w-fit">All properties</a>
                </div>


            </LeftAlignedFullWidth>
        </section>
    )
}

export default LatestProp