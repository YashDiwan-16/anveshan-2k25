"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CountdownPage() {
  const getStoredTargetDate = () => {
    const savedDate = localStorage.getItem("targetDate");
    if (savedDate) return new Date(savedDate);

    // If no stored date, set a new target date 15 days from now and store it
    const newTargetDate = new Date();
    newTargetDate.setDate(newTargetDate.getDate() + 15);
    localStorage.setItem("targetDate", newTargetDate.toISOString());
    return newTargetDate;
  };

  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Load target date from local storage
    setTargetDate(getStoredTargetDate());
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        localStorage.removeItem("targetDate"); // Remove stored date when countdown ends
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full text-white text-center p-4 relative">
      {/* Logo */}
      <div className="mb-4">
        <Image
          src="/logo.png"
          alt="TechFest Logo"
          width={150}
          height={150}
          className="w-24 md:w-36 lg:w-48"
        />
      </div>

      {/* TechFest 2025 Title */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-gray-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] italic">
        TECHFEST 2025
      </h1>

      {/* Countdown Timer */}
      <div className="relative z-10 flex flex-col items-center mt-8 md:mt-12 lg:mt-16">
        {timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds >
        0 ? (
          <div className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide text-gray-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse uppercase">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>
        ) : (
          <div className="text-5xl md:text-7xl font-extrabold tracking-wide text-gray-100 animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] uppercase italic">
            Let's Begin!
          </div>
        )}
      </div>
    </div>
  );
}
