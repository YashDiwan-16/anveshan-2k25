"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SpookyLogo from "@/components/SpookyLogo";
import GlowingTitle from "@/components/GlowingTitle";
import CountdownTimer from "@/components/CountdownTimer";
import EerieCarousel from "@/components/EerieCarousel";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center space-y-12"
      >
        <SpookyLogo />
        <GlowingTitle />
        <CountdownTimer />
        <EerieCarousel />
      </motion.div>
    </main>
  );
}
