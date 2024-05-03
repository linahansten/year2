'use client'
import { useState, useEffect } from 'react';
import { getData, deleteData } from '@/utils/handleDatabase';

export default function Create() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const eventData = await getData();
      setEvents(eventData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    try {
      await deleteData(id);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      events.forEach(event => {
        const timeDiff = new Date(event.selecteddate).getTime() - new Date().getTime();
        const minutesRemaining = Math.floor(timeDiff / (1000 * 60));
  
        if (minutesRemaining <= 0) {
          deleteEvent(event.id);
        }
      });
    }, 60000); // 60000 milliseconds = 1 minute
    return () => clearInterval(interval);
  }, [events]);
  

  const handleRefresh = (e) => {
    e.preventDefault();
    fetchEvents();
  };

  const formatDate = (dateString, id) => {
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
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return eventDate.toLocaleDateString('en-US', options);
    }
  };

  // Sort events based on the time difference
  const sortedEvents = [...events].sort((a, b) => {
    const timeDiffA = new Date(a.selecteddate).getTime() - new Date().getTime();
    const timeDiffB = new Date(b.selecteddate).getTime() - new Date().getTime();
    return timeDiffA - timeDiffB;
  });

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">Events</h2>
      <a className="text-gray-300 text-sm mb-4" href="#" onClick={handleRefresh}>
        Refresh Page
      </a>
      <div>
        {sortedEvents.map((event) => (
          <div key={event.id} className="text-gray-100 flex flex-col justify-center "> 
            <h2 className='font-bold'>{formatDate(event.selecteddate, event.id)}</h2>
            <p className=' mb-3'>{event.eventname}</p>
          </div>
        ))}
      </div>
      <a className="text-gray-300 text-sm mb-4" href="/createEvents">Create an Event</a>
    </div>
  );
}
