"use client";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function CarouselLocal() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 10000,
                    }),
                ]}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="h-[33rem] w-full relative">
                                <Image
                                    src={`/images/image_${index + 1}.jpg`}
                                    alt="Picture of the author"
                                    width={1920}
                                    height={1080}
                                    className="h-full w-full object-cover 
                        "
                                />
                                <div className="absolute  top-[54%] left-[4%] md:left-[10%] w-[36rem] bg-gradient-to-r from-white px-4 py-2 rounded-md">
                                    <h1 className="text-3xl font-bold">
                                        movie name {index}
                                    </h1>
                                    <p className="hidden md:inline-block">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Sed eum quidem,
                                        laborum nostrum quisquam odit animi
                                        ducimus, laudantium labore assumenda
                                        dolorum inventore perferendis alias
                                        dignissimos enim quam culpa error earum!
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
}

export default CarouselLocal;
