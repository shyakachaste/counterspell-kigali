import React from 'react';
import '../styles/Schedule.css';

const Schedule = () => {
  const events = [
    { time: '8:00 AM', title: 'Doors open' },
    { time: '8:45 AM', title: 'Opening ceremony' },
    { time: '9:30 AM', title: 'Breakfast' },
    { time: '10:00 PM', title: 'Start working on your game!' },
    { time: '11:00 PM', title: 'Gamedev workshop 1' },
    { time: '1:00 PM', title: 'Lunch' },
    { time: '2:00 PM', title: 'Activity 1' },
    { time: '4:00 PM', title: 'Lightning talks' },
    { time: '5:00 PM', title: 'Gamedev workshop 2' },
    { time: '7:00 PM', title: 'Game demos' },
    { time: '8:00 PM', title: 'Closing ceremony' }
  ];

  return (
    <section className="schedule-section">
        <p className="schedule-intro">
         Get ready for <span className="highlight">12 hours</span> of coding awesome games!
       </p>
        <p className="schedule-note">Check out what we have planned for you!</p>


      <div className="schedule-list">
        {events.map((event, index) => (
          <div key={index} className="schedule-item">
            <span className="schedule-title">{event.title}</span>
            <span className="schedule-time">{event.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
