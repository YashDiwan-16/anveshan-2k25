"use client";

import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export default function Home() {
  return (
    <main className="min-h-screen p-8 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12 text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]"
      >
        ANVESHAN 2025
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </main>
  );
}
