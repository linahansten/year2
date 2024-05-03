'use client'
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarProps {
  selectedDate: Date;
  handleDateChange: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, handleDateChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="MMMM d, yyyy h:mm aa"
      className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:border-blue-500 text-gray-100"
      placeholderText="Select Date and Time"
      required
    />
  );
};

export default Calendar;
