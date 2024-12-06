'use client'; // This ensures the code runs only on the client side

import './time.css';
import { useEffect } from 'react';

// Function to check if the office is open
function isOfficeOpen(currentDay, currentTime) {
  const officeHours = {
    Monday: { start: '08:00:00', end: '17:00:00' },
    Tuesday: { start: '08:00:00', end: '17:00:00' },
    Wednesday: { start: '08:00:00', end: '17:00:00' },
    Thursday: { start: '08:00:00', end: '17:00:00' },
    Friday: { start: '08:00:00', end: '17:00:00' },
    Saturday: { start: '08:00:00', end: '12:00:00' },
    Sunday: { start: null, end: null }, // Closed
  };

  const dayHours = officeHours[currentDay];
  if (!dayHours || !dayHours.start || !dayHours.end) {
    return false; // Closed
  }

  const current = new Date(`1970-01-01T${currentTime}Z`);
  const start = new Date(`1970-01-01T${dayHours.start}Z`);
  const end = new Date(`1970-01-01T${dayHours.end}Z`);

  return current >= start && current <= end;
}

export default function NewTime() {
  const clockIconSize = 47;

  useEffect(() => {
    // Get current time and day of the week in MST
    const formatterTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Denver',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const formatterDay = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Denver',
      weekday: 'long',
    });

    const serverTime = formatterTime.format(new Date());
    const currentDay = formatterDay.format(new Date());
    const isOpen = isOfficeOpen(currentDay, serverTime);

    // Highlight the current day if the office is open
    if (isOpen) {
      const dayRow = document.getElementById(currentDay); // Use `id` matching currentDay
      if (dayRow) {
        dayRow.classList.add('current-day'); // Add CSS class to highlight the row
      }
    }
  }, []); // Empty dependency array ensures this runs once after the component mounts


 

  return (
    <div className="timeMain pb-1 order-2 lg:pt-6 flex justify-center">
      <div className="times px-9 p-5 border-2 border-solid dark:border-accent border-borderlight rounded-lg shadow-lg dark:bg-primary transition-all duration-300 ease-in-out max-w-[83%] lg:max-w-[1000px] lg:p-10 lg:shadow-xl">
        <div className="card-header flex justify-between items-center pb-2.5 border-b-highlight border-b m-2.5 lg:pb-4 lg:mb-4">
          <div className="media-body">
            <h4 className="OpeningT font-sans dark:text-text1 text-[#333] text-bold m-0 md:text-2xl text-xl">Office Hours</h4>
          </div>
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  className="dark:fill-text1 fill-[#333] "
  width={clockIconSize}
  height={clockIconSize}
>
  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
</svg>

        </div>
        <table className="openinghours ">
          <tbody>
            <tr id="Monday">
              <th>Monday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Tuesday">
              <th>Tuesday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Wednesday">
              <th>Wednesday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Thursday">
              <th>Thursday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Friday">
              <th>Friday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Saturday">
              <th>Saturday</th>
              <td className="text-right">8 AM–12 PM</td>
            </tr>
            <tr id="Sunday">
              <th>Sunday</th>
              <td className="text-right">Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
