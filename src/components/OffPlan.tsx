import Container from "./Container"

import OffPlanCarousel from "./OffPlanCarousel"

const OffPlan = () => {
    return (
        <section className="py-6 ">
            <Container>
                <h2 className="title mb-6">off-plan projects</h2>
            </Container>
            <div className="offplan py-8">
                <Container>
                    {/* <Carousel disableSwipe className="w-full h-full   " slidesPerView={1} >
                        <CarouselContent className="h-full p-[1px] disable-embla-swipe">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem className="h-full pointer-events-none offplan-card" key={index}>
                                    <OFFPlanCard />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious  className=" top-0 translate-0 lg:w-[60px] lg:h-[60px] rounded-xl border-none bg-[#dadade] hover:bg-[#dadade] cursor-pointer  lg:[&>svg]:!w-8 lg:[&>svg]:!h-8  lg:left-0 left-4" ><ArrowLeftIcon /></CarouselPrevious>

                        <CarouselNext className="top-0 translate-0 lg:w-[60px] lg:h-[60px] rounded-xl border-none bg-[#dadade]  lg:[&>svg]:!w-8 lg:[&>svg]:!h-8 hover:bg-[#dadade] cursor-pointer right-4 lg:right-0" >
                            <ArrowRightIcon />
                        </CarouselNext>
                    </Carousel> */}
                    <OffPlanCarousel/>
                </Container>
            </div>




        </section>
    )
}

export default OffPlan