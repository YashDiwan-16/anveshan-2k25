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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="relative w-full max-w-sm mx-auto text-center px-4">
      <h2 className="text-xl font-bold text-red-500 mb-4">Featured Events</h2>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={carouselItems[currentIndex].id}
            initial={{
              opacity: 0,
              x: direction > 0 ? 100 : -100,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -100 : 100,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full flex justify-center"
          >
            <Card className="bg-black/90 border-red-500 shadow-lg shadow-red-500/50 h-[320px] w-full max-w-[320px] rounded-xl">
              <CardContent className="p-4 h-full flex flex-col justify-between">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    fill
                    src={carouselItems[currentIndex].image}
                    alt={carouselItems[currentIndex].title}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-red-500">
                    {carouselItems[currentIndex].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {carouselItems[currentIndex].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 left-2 text-red-500 hover:text-red-400"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 right-2 text-red-500 hover:text-red-400"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default HorrorCarousel;
