"use client";

import { motion } from "framer-motion";

const GlowingTitle = () => {
  return (
    <motion.h1
      className="w-full text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-creepy text-red-600 tracking-widest"
      style={{
        textShadow:
          "0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.5), 0 0 30px rgba(255, 0, 0, 0.3)",
      }}
      animate={{
        textShadow: [
          "0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.5), 0 0 30px rgba(255, 0, 0, 0.3)",
          "0 0 15px rgba(255, 0, 0, 0.8), 0 0 25px rgba(255, 0, 0, 0.6), 0 0 35px rgba(255, 0, 0, 0.4)",
          "0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.5), 0 0 30px rgba(255, 0, 0, 0.3)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      TechFest 2025
    </motion.h1>
  );
};

export default GlowingTitle;
