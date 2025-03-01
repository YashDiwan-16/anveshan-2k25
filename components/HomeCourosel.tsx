"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Chakava",
      button: "Explore Chakava",
      link: "/events/chakava",
      src: "/eventlogos/chakava.png",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      link: "/events/sambhashini",
      src: "/eventlogos/sambhashani.png",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      link: "/events/logiclamp",
      src: "/eventlogos/logiclamps.png",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      link: "/events/mlwars",
      src: "/eventlogos/MLWars.png",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      link: "/events/cybercanvas",
      src: "/eventlogos/cybercanvas.png",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
