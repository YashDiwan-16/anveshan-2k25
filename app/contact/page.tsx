"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const accordionData = [
  {
    title: "Who We Are",
    content:
      "We are the gatekeepers of the underworld, providing eerie experiences and supernatural assistance.",
  },
  {
    title: "Support Hours",
    content:
      "Our spirits are active from 10 PM to 4 AM. Reach us when the veil is thinnest.",
  },
  {
    title: "Contact Methods",
    content:
      "Email: ghostlyhelp@horrorworld.com | Phone: +666-666-6666 | Ouija Board: Available on request.",
  },
  {
    title: "Location",
    content:
      "Find us lurking in the shadows at The Haunted Mansion, Silent Hill, HorrorLand.",
  },
];

export default function HorrorContactPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/your-horror-bg.jpg')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative w-full max-w-3xl bg-black bg-opacity-90 p-8 rounded-lg shadow-lg border border-red-700 text-red-500 backdrop-blur-lg">
        <h1 className="text-5xl font-extrabold text-center text-red-600 mb-6 animate-pulse drop-shadow-lg">
          Contact The Unknown
        </h1>

        {/* Accordion for Information */}
        <Accordion
          type="single"
          collapsible
          className="mt-6 border-t border-red-600 pt-4"
        >
          {accordionData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-red-500 hover:text-white transition duration-300 ease-in-out">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Creepy Decorative Elements */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 italic">
            "The spirits are waiting... dare to reach out?"
          </p>
          <Button className="mt-4 w-full bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            Summon Us
          </Button>
        </div>
      </div>
    </div>
  );
}
