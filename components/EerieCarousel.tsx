"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    title: "Haunted Hackathon",
    description: "Code through the night in our spooky coding challenge",
  },
  {
    id: 2,
    title: "Ghost in the Machine",
    description: "Explore the eerie world of AI and machine learning",
  },
  {
    id: 3,
    title: "Cryptic Crypto",
    description: "Unravel the mysteries of blockchain and cryptocurrency",
  },
];

const EerieCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="relative w-full max-w-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-black bg-opacity-70 border-red-500 shadow-lg shadow-red-500/50">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-red-500 mb-4">
                {carouselItems[currentIndex].title}
              </h3>
              <p className="text-xl text-gray-300">
                {carouselItems[currentIndex].description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -left-16 transform -translate-y-1/2 text-red-500 hover:text-red-400 hover:bg-black hover:bg-opacity-50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-10 w-10" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -right-16 transform -translate-y-1/2 text-red-500 hover:text-red-400 hover:bg-black hover:bg-opacity-50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-10 w-10" />
      </Button>
    </div>
  );
};

export default EerieCarousel;
