'use client'
import React, { useState } from 'react';
import Calendar from '@/components/Calendar';
import { create } from '@/components/Create';

export default function Create() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date:Date) => {
    setSelectedDate(new Date(date));
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center flex-col">
      <form className="bg-gray-800 shadow-md rounded-md p-8 max-w-md w-full" action={create} method="post">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">Create Event</h2>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Event Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:border-blue-500 text-gray-100" name="eventName" placeholder="Event Name" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Date and Time</label>
          <input type="hidden" name='date' value={selectedDate.toISOString()} />
          <Calendar handleDateChange={handleDateChange} selectedDate={new Date(selectedDate)} />
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="submit">
            Save Event
          </button>
        </div>
      </form>
      <a className="text-gray-300 text-sm mt-4" href="/">Home</a>
    </div>
  );
}
