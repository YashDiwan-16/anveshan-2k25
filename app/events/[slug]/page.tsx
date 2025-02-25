import { events } from "@/data/events";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const EventSlug = ({ params }: { params: { slug: string } }) => {
  const event = events.find((event) => event.slug === params.slug);

  if (!event) return <div>Event not found</div>;

  return (
    <div className="min-h-screen text-white">
      <div className=" mx-auto px-4 py-8 animate-fade-in">
        <Card className=" bg-transparent p-6 border-red-800">
          <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-4 text-center transition-transform duration-300 hover:-translate-y-1">
            {event.title}
          </h1>

          <div className="relative w-full max-w-[800px] mx-auto transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={event.image}
              alt={event.title}
              className="object-contain rounded-lg w-full"
              width={800}
              height={1200}
            />
          </div>

          <div className="space-y-4 text-center mt-6">
            <p className="text-lg text-red-400 font-semibold">{event.date}</p>
            <p className="text-md text-gray-300 leading-relaxed px-4 md:px-16">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <a href={event.unpaidformlink} target="_blank">
                <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  PCCOE Registration
                </button>
              </a>

              <a href={event.paidformlink} target="_blank">
                <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
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
                  Non-PCCOE Registration
                </button>
              </a>

              <a href={event.rulebook} target="_blank">
                <button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Rule Book
                </button>
              </a>
              <a href={event.whatsapp} target="_blank">
                <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
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
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </Card>

        {/* Event Details
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-zinc-900/50 border-red-800 p-6 transition-transform duration-300 hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              What to Expect
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Professional ghost hunting equipment</li>
              <li>Guided tour of haunted locations</li>
              <li>Historical background of paranormal activities</li>
              <li>Safety briefing and protocols</li>
            </ul>
          </Card>

          <Card className="bg-zinc-900/50 border-red-800 p-6 transition-transform duration-300 hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Age 18 or above</li>
              <li>Signed waiver form</li>
              <li>Comfortable walking shoes</li>
              <li>Flashlight (optional)</li>
            </ul>
          </Card>
        </div> */}

        {/* Event Coordinators */}
        <div className="mt-8">
          <Card className="bg-zinc-900/50 border-red-800 p-6">
            <h2 className="text-2xl font-bold text-red-500 mb-6 text-center">
              Event Coordinators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {event.coordinators.map((coordinator, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-full bg-red-700/30 flex items-center justify-center">
                    <span className="text-xl text-red-400">
                      {coordinator.split(" ")[0][0]}
                      {coordinator.split(" ")[1][0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400">
                      {coordinator}
                    </h3>
                    <p className="text-sm text-gray-400">Event Coordinator</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventSlug;
