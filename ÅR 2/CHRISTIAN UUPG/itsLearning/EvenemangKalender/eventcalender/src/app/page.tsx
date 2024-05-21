'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { getData, deleteData } from '@/utils/handleDatabase';
import Router from '../components/UseRouter';

type Event = {
  id: number;
  eventname: string;
  selecteddate: string;
};

export default function Create() {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = useCallback(async () => {
    try {
      const eventData = await getData();
      setEvents(eventData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const deleteEvent = useCallback(async (id: number) => {
    try {
      await deleteData(id.toString());
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  }, [fetchEvents]);

  useEffect(() => {
    const interval = setInterval(() => {
      events.forEach(event => {
        const timeDiff = new Date(event.selecteddate).getTime() - new Date().getTime();
        const minutesRemaining = Math.floor(timeDiff / (1000 * 60));
  
        if (minutesRemaining <= 0) {
          deleteEvent(event.id);
        }
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [events, deleteEvent]);


  const formatDate = useCallback((dateString: string, id: number) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    
    const timeDiff = eventDate.getTime() - now.getTime();
    
    const hoursRemaining = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    if (hoursRemaining <= 0) {
      if (minutesRemaining <= 0) {
        deleteEvent(id);
        return 'Happening now';
      } else {
        return `${minutesRemaining} minutes until event`;
      }
    } else if (hoursRemaining <= 24) {
      return `Today - ${hoursRemaining} hours until event`;
    } else {
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' } as const;
      return eventDate.toLocaleDateString('en-US', options);
    }
  }, [deleteEvent]);

  const sortedEvents = [...events].sort((a, b) => {
    const timeDiffA = new Date(a.selecteddate).getTime() - new Date().getTime();
    const timeDiffB = new Date(b.selecteddate).getTime() - new Date().getTime();
    return timeDiffA - timeDiffB;
  });

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">Events</h2>
      <Router/>
      <div>
        {sortedEvents.map((event) => (
          <div key={event.id} className="text-gray-100 flex flex-col justify-center "> 
            <h2 className='font-bold'>{formatDate(event.selecteddate, event.id)}</h2>
            <p className=' mb-3'>{event.eventname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
