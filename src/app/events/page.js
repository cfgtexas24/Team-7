"use client";

import { CalendarIcon, MapPinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { motion } from "framer-motion";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://52.91.214.247:8080/api/events/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEvents(data.sort((a, b) => new Date(a.date) - new Date(b.date)));
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };
    fetchEvents();
  }, []);

  const getTimeUntilEvent = (eventDate, startTime) => {
    if (!eventDate || !startTime) {
      return "Invalid date or start time";
    }

    const eventStartDateTime = new Date(
      `${eventDate.split("T")[0]}T${startTime}`
    );
    const now = new Date();
    const distance = formatDistanceToNowStrict(eventStartDateTime, {
      addSuffix: false,
    });
    return distance;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="bg-slate-50"
    >
      <div className="max-w-6xl mx-auto p-8">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Upcoming Events
        </motion.h1>
        <motion.div 
          className="h-[70vh] overflow-y-auto p-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {events?.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out"
              >
                <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
                <motion.div 
                  className="flex items-center text-gray-600 mb-3"
                  whileHover={{ x: 5 }}
                >
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  <span>
                    {event.date
                      ? `${event.date.split("T")[0]} at ${event.startTime}`
                      : "Date not available"}
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-gray-600 mb-3"
                  whileHover={{ x: 5 }}
                >
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>{event.location || "Location not available"}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-gray-600 mb-3"
                  whileHover={{ x: 5 }}
                >
                  <span>
                    Time until event:{" "}
                    {event.date && event.startTime
                      ? getTimeUntilEvent(event.date, event.startTime)
                      : "Time not available"}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}