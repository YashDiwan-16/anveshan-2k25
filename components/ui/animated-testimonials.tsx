import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    quote: "The haunting whispers echo through the ancient halls...",
    name: "Victoria Blackwood",
    designation: "Ghost Whisperer",
    src: "/api/placeholder/500/500",
  },
  {
    quote: "In the depths of darkness, we found unspeakable truths...",
    name: "Edgar Ravenscroft",
    designation: "Paranormal Investigator",
    src: "/api/placeholder/500/500",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Isabella Nightshade",
    designation: "Medium",
    src: "/api/placeholder/500/500",
  },
];

export const HauntedTestimonials = ({
  testimonials = defaultTestimonials,
  autoplay = false,
}: {
  testimonials?: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const currentTestimonials =
    testimonials.length > 0 ? testimonials : defaultTestimonials;

  const handleNext = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % currentTestimonials.length);
      setIsGlitching(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setActive(
        (prev) =>
          (prev - 1 + currentTestimonials.length) % currentTestimonials.length
      );
      setIsGlitching(false);
    }, 300);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // const randomDistortion = () => ({
  //   x: Math.random() * 10 - 5,
  //   y: Math.random() * 10 - 5,
  //   rotate: Math.random() * 5 - 2.5,
  //   scale: 0.95 + Math.random() * 0.1,
  // });

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.src}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotateY: 180,
                    filter: "brightness(0.7) contrast(1.2)",
                  }}
                  animate={{
                    opacity: index === active ? 1 : 0.5,
                    scale:
                      (index === active ? 1 : 0.95) *
                      (0.95 + Math.random() * 0.1),
                    rotateY: index === active ? 0 : 180,
                    filter: [
                      "brightness(0.7) contrast(1.2)",
                      "brightness(1) contrast(1)",
                      "brightness(0.7) contrast(1.2)",
                    ],
                    x: Math.random() * 10 - 5,
                    y: Math.random() * 10 - 5,
                    rotate: Math.random() * 5 - 2.5,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    rotateY: -180,
                    filter: "brightness(0.7) contrast(1.2)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.45, 0.05, 0.55, 0.95],
                  }}
                  className="absolute inset-0 shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-full w-full rounded-lg object-cover object-center 
                             transition-all duration-300
                             hover:filter hover:brightness-75 hover:contrast-125"
                  />
                  <div
                    className={`absolute inset-0 mix-blend-color-dodge bg-gradient-to-t 
                                 from-red-900/20 to-transparent opacity-0 
                                 transition-opacity duration-300 
                                 ${isGlitching ? "opacity-100" : ""}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="relative"
          >
            <h3
              className="text-2xl font-serif font-bold text-red-600 mb-2
                         [text-shadow:_0_0_10px_rgb(220_38_38_/_40%)]"
            >
              {currentTestimonials[active].name}
            </h3>
            <p className="text-sm text-gray-400 font-serif italic">
              {currentTestimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-300 mt-8 font-serif">
              {currentTestimonials[active].quote
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.03 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-8 w-8 rounded-full bg-red-950 hover:bg-red-900 
                       transition-colors duration-300 flex items-center justify-center 
                       group border border-red-800"
            >
              <span className="text-red-500 group-hover:text-red-400">←</span>
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full bg-red-950 hover:bg-red-900 
                       transition-colors duration-300 flex items-center justify-center 
                       group border border-red-800"
            >
              <span className="text-red-500 group-hover:text-red-400">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HauntedTestimonials;
