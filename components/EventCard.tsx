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
    >
      <Card className="bg-black/80 border-red-600 overflow-hidden backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-red-500">{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <p className="text-gray-300">{event.description}</p>
          <p className="text-sm text-gray-400 mt-2">{event.date}</p>
        </CardContent>
        <CardFooter>
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
