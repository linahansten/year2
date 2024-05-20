'use client';
import { useState } from 'react';
import '../app/page.css';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthData = (year:number, month:number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const weeks = [];
    let dayCounter = 1 - firstDay;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      const day = new Date(year, month, dayCounter);
      week.push({ day, currentMonth: day.getMonth() === month });
      dayCounter++;
    }
    weeks.push(week);
  }
  return weeks;
};

const months = () => {
   for (let i = 0; i < 11; i++) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', ['November'], 'December'
    ];
 
    return (
      <div className="header">
        <button onClick={prevMonth}>Previous</button>
        <span>{`${months[i]} ${currentDate.getFullYear()}`}</span>
        <button onClick={nextMonth}>Next</button>
      </div>
    );
  }
};
  const days = () => {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
      <div className="days">
        {weekdays.map((day, i) => (
          <div key={i} className="day">{day}</div>
        ))}
      </div>
    );
  };


  const cells = () => {
    const monthData = getMonthData(currentDate.getFullYear(), currentDate.getMonth());
    const today = new Date();
    return (
      <div className="cells">
        {monthData.map((week, i) => (
          <div key={i} className="week">
            {week.map((dayInfo, j) => (
              <div
                key={j}
                className={`cell ${!dayInfo.currentMonth ? 'disabled' : ''} ${isSameDay(dayInfo.day, today) ? 'currentDay' : ''}`}
              >
                <span>{dayInfo.day.getDate()}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const isSameDay = (d1:any, d2:any) => (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  return (
    <div className="calendar">
      {months()}
      {days()}
      {cells()}
    </div>
  );
}
