"use client";

import { CalendarIcon, MapPinIcon, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";

const events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "San Francisco, CA",
    attendees: 500,
  },
  {
    id: 2,
    title: "Annual Charity Gala",
    date: "2024-04-22",
    time: "07:00 PM",
    location: "New York City, NY",
    attendees: 300,
  },
  {
    id: 3,
    title: "Summer Music Festival",
    date: "2024-07-10",
    time: "12:00 PM",
    location: "Austin, TX",
    attendees: 5000,
  },
  {
    id: 4,
    title: "AI and Machine Learning Workshop",
    date: "2024-05-05",
    time: "10:00 AM",
    location: "Boston, MA",
    attendees: 150,
  },
  {
    id: 5,
    title: "International Food Fair",
    date: "2024-06-18",
    time: "11:00 AM",
    location: "Chicago, IL",
    attendees: 2000,
  },
  {
    id: 6,
    title: "Global Climate Summit",
    date: "2024-09-01",
    time: "08:00 AM",
    location: "Geneva, Switzerland",
    attendees: 1000,
  },
  {
    id: 7,
    title: "Startup Pitch Competition",
    date: "2024-10-15",
    time: "02:00 PM",
    location: "London, UK",
    attendees: 250,
  },
];

export default function EnhancedEventList() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
        <div className="h-[70vh] overflow-y-auto p-4">
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg animate-fade-in"
                style={{
                  animationDelay: `${event.id * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
                <div className="flex items-center text-gray-600 mb-3">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  <span>
                    {event.date} at {event.time}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <UserIcon className="w-5 h-5 mr-2" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
