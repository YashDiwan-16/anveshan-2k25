"use client";
import HauntedTestimonials from "@/components/ui/animated-testimonials";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-10 md:py-14 lg:py-20 flex flex-col items-center">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center 
        text-red-500 shadow-lg shadow-red-500/50 mb-6 sm:mb-10 md:mb-12"
      >
        Meet Our Haunted Team
      </h1>

      <div className="w-full max-w-7xl flex justify-center px-2 sm:px-4">
        <HauntedTestimonials />
      </div>
    </div>
  );
}
