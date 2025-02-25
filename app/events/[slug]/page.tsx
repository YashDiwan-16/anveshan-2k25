import { events } from "@/data/events";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const EventSlug = ({ params }: { params: { slug: string } }) => {
  const event = events.find((event) => event.slug === params.slug);

  if (!event) return <div>Event not found</div>;

  return (
    <div className="min-h-screen text-white px-4">
      <div className="mx-auto py-6 md:py-8 animate-fade-in max-w-4xl">
        <Card className="bg-transparent p-4 md:p-6 border-red-800">
          <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-4 text-center transition-transform duration-300 hover:-translate-y-1">
            {event.title}
          </h1>

          <div className="relative w-full max-w-full mx-auto transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={event.image}
              alt={event.title}
              className="object-contain rounded-lg w-full h-auto"
              width={800}
              height={1200}
            />
          </div>

          <div className="space-y-4 text-center mt-6">
            <p className="text-lg text-red-400 font-semibold">{event.date}</p>
            <p className="text-md text-gray-300 leading-relaxed px-2 md:px-16">
              {event.description}
            </p>

            <div className="w-full max-w-2xl mx-auto bg-zinc-800/50 border border-red-800/50 rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 font-medium">Free</span>
                  <span className="text-gray-400">for PCCOE Students</span>
                </div>
                <div className="hidden md:block text-gray-500">|</div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-400 font-medium">Paid</span>
                  <span className="text-gray-400">for Non-PCCOE Students</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
              {[
                {
                  link: event.unpaidformlink,
                  text: "PCCOE Registration",
                  color: "orange",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  ),
                },
                {
                  link: event.paidformlink,
                  text: "Non-PCCOE Registration",
                  color: "orange",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  ),
                },
                {
                  link: event.rulebook,
                  text: "Rule Book",
                  color: "red",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2V5l-9-2-9 2v14l9 2z"
                      />
                    </svg>
                  ),
                },
                {
                  link: event.whatsapp,
                  text: "WhatsApp",
                  color: "green",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  ),
                },
              ].map(({ link, text, color, icon }, index) => (
                <a
                  href={link}
                  target="_blank"
                  key={index}
                  className="w-full sm:w-auto"
                >
                  <button
                    className={`w-full sm:w-auto bg-${color}-600 hover:bg-${color}-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-${color}-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2`}
                  >
                    {icon}
                    {text}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EventSlug;
