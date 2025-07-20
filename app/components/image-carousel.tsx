"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import AutoHeight from "embla-carousel-auto-height";


export default function ImageCarousel({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-xl mx-auto">
        <Carousel opts={{ loop: true }} setApi={setApi} plugins={[AutoHeight()]} className="md:mx-8">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="flex items-center justify-center">
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="object-contain max-h-[350px] width-auto rounded-2xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 text-gray-700" />
              <CarouselNext className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 text-gray-700" />
            </>
          )}
        </Carousel>
      </div>
      <div className="mb-4">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`inline-block w-2 h-2 mx-1 rounded-full ${current === index + 1 ? 'bg-gray-700' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}