"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-07T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 text-center text-red-500">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          className="flex flex-col items-center"
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1, 1.05, 1],
            textShadow: [
              "0 0 5px rgba(255, 0, 0, 0.5)",
              "0 0 10px rgba(255, 0, 0, 0.7)",
              "0 0 5px rgba(255, 0, 0, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <span className="text-5xl sm:text-6xl md:text-7xl font-bold">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs sm:text-sm md:text-base uppercase">
            {unit}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
