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
      title: "Sambhashini",
      button: "Explore Sambhashini",
      link: "/events/sambhashini",
      src: "/eventlogos/sambhashani.p ng",
    },
    {
      title: "Logic Lamps",
      button: "Explore Logic Lamps",
      link: "/events/logiclamps",
      src: "/eventlogos/logiclamps.png",
    },
    {
      title: "ML Wars",
      button: "Explore ML Wars",
      link: "/events/MLWars",
      src: "/eventlogos/MLWars.png",
    },
    {
      title: "Cyber Canvas",
      button: "Explore Cyber Canvas",
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
