"use client";

import { CalendarIcon, MapPinIcon, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";

export default function Events() {
  const [events, setEvents] = useState([]);

  /* const Dummydata = [
    {
      id: 1,
      title: "Birthday Party",
      location: "123 Celebration Ave, Party City",
      date: "2024-12-25T00:00:00.000+00:00",
      description: null,
      startTime: "18:00:00",
      endTime: "22:00:00",
    },
    {
      id: 2,
      title: null,
      location: null,
      date: null,
      description: null,
      startTime: null,
      endTime: null,
    },
    {
      id: 3,
      title: "Birthday Party",
      location: "123 Celebration Ave, Party City",
      date: "2024-12-25T00:00:00.000+00:00",
      description: null,
      startTime: "18:00:00",
      endTime: "22:00:00",
    },
    {
      id: 4,
      title: "Office Meeting",
      location: "456 Corporate Blvd, Business Town",
      date: "2024-11-05T00:00:00.000+00:00",
      description: null,
      startTime: "09:00:00",
      endTime: "11:00:00",
    },
    {
      id: 5,
      title: "Wedding Reception",
      location: "789 Bliss Lane, Happytown",
      date: "2024-10-31T00:00:00.000+00:00",
      description: null,
      startTime: "17:00:00",
      endTime: "23:00:00",
    },
    {
      id: 6,
      title: "Tech Conference",
      location: "101 Innovation Road, Silicon Valley",
      date: "2024-12-15T00:00:00.000+00:00",
      description: null,
      startTime: "10:00:00",
      endTime: "18:00:00",
    },
    {
      id: 7,
      title: "Charity Gala",
      location: "202 Philanthropy Ave, Giving City",
      date: "2024-11-20T00:00:00.000+00:00",
      description: null,
      startTime: "19:00:00",
      endTime: "23:00:00",
    },
  ]; */

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

  return (
    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
        <div className="h-[70vh] overflow-y-auto p-4">
          <div className="grid gap-6 md:grid-cols-2">
            {events?.map((event) => (
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
                    {event.date
                      ? `${event.date.split("T")[0]} at ${event.startTime}`
                      : "Date not available"}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>{event.location || "Location not available"}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <span>
                    Time until event:{" "}
                    {event.date && event.startTime
                      ? getTimeUntilEvent(event.date, event.startTime)
                      : "Time not available"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
