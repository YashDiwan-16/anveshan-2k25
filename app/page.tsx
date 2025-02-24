"use client";

import { motion } from "framer-motion";
import GlowingTitle from "@/components/GlowingTitle";
import CountdownTimer from "@/components/CountdownTimer";
import EerieCarousel from "@/components/EerieCarousel";
import SpookyLogo from "@/components/SpookyLogo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center space-y-6"
      >
        <SpookyLogo />
        <GlowingTitle />
        <CountdownTimer />
        <EerieCarousel />
      </motion.div>
    </main>
  );
}
