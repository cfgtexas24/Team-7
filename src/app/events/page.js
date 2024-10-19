"use client";

import { CalendarIcon, MapPinIcon, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

export default function Events() {
  const [events, setEvents] = useState([
    {
        "id": 1,
        "title": "Birthday Party",
        "location": "123 Celebration Ave, Party City",
        "date": "2024-12-25T00:00:00.000+00:00",
        "description": null,
        "startTime": "18:00:00",
        "endTime": "22:00:00"
    }
  ]);

  const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

  const getTimeUntilEvent = (eventDate, startTime) => {
    const eventStartDateTime = new Date(`${eventDate.split("T")[0]}T${startTime}`);
    const now = new Date();
    const distance = formatDistanceToNowStrict(eventStartDateTime, { addSuffix: false });
    return distance;
  };

  return (
    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
        <div className="h-[70vh] overflow-y-auto p-4">
          <div className="grid gap-6 md:grid-cols-3">
            {sortedEvents.map((event) => (
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
                    {event.date.split("T")[0]} at {event.startTime}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <span>Time until event: {getTimeUntilEvent(event.date, event.startTime)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
