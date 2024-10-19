"use client"
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://52.91.214.247:8080/api/events/");
        const data = await response.json();
        console.log(data)
        setEvents(data);
      } catch (error) {
        console.error("Error Fetching events", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
}
