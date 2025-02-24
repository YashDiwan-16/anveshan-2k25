"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Event {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="bg-black/80 border-red-600 overflow-hidden backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl text-red-500">{event.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <Image
            height={1920}
            width={1080}
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <div className="flex-grow">
            <p className="text-gray-300">{event.description}</p>
            <p className="text-sm text-gray-400 mt-2">{event.date}</p>
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <Link href={`/events/${event.slug}`} className="w-full">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              Register
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
