"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const carouselItems = [
  {
    id: 1,
    image: "/eventlogos/chakava.png",
    title: "Chakava",
    description: "The hunt for Swarajya begins!",
  },
  {
    id: 2,
    image: "/eventlogos/sambhashani.png",
    title: "Sambhashani",
    description: "Exciting event coming soon!",
  },
  {
    id: 3,
    image: "/eventlogos/MLWars.png",
    title: "ML Wars",
    description: "Don't miss this thrilling experience.",
  },
  {
    id: 4,
    image: "/eventlogos/logiclamps.png",
    title: "Logic Lamps",
    description: "Get ready for an adventure!",
  },
  {
    id: 5,
    image: "/eventlogos/cybercanvas.png",
    title: "Cyber Canvas",
    description: "Something amazing is happening!",
  },
];

const HorrorCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 3) % carouselItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 3 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto text-center px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-red-500 mb-6 transform hover:scale-105 transition-transform">
        Featured Events
      </h2>
      <div className="overflow-hidden py-4">
        <div className="flex justify-center gap-4 sm:gap-6">
          <AnimatePresence mode="wait" initial={false}>
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % carouselItems.length;
              const item = carouselItems[index];
              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: direction >= 0 ? 100 : -100,
                    scale: 0.9,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: direction >= 0 ? -100 : 100,
                    scale: 0.9,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full max-w-[260px] sm:max-w-[300px]"
                >
                  <Card
                    className="bg-black/80 border-red-500 hover:border-red-400 shadow-lg shadow-red-500/50 
                    h-[280px] transform hover:scale-105 transition-all duration-300 hover:shadow-red-400/60"
                  >
                    <CardContent className="p-4 h-full flex flex-col justify-between">
                      <div className="relative h-36 sm:h-40 w-full overflow-hidden rounded-lg">
                        <Image
                          fill
                          src={item.image}
                          alt={item.title}
                          className="object-cover transform hover:scale-110 transition-transform duration-300"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="mt-auto">
                        <h3 className="text-lg sm:text-xl font-bold text-red-500 mt-2 hover:text-red-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 mt-1 text-xs sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-4 md:-left-16 text-red-500 
          hover:text-red-400 hover:bg-black/50 backdrop-blur-sm transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-4 md:-right-16 text-red-500 
          hover:text-red-400 hover:bg-black/50 backdrop-blur-sm transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
      </Button>
    </div>
  );
};

export default HorrorCarousel;
