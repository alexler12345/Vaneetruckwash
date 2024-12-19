import './time.css'
import isOfficeOpen from '../subComp/whatTime';
import { WhatDay } from '../subComp/whatTime';

export default async function Timetable() {
  // Fetch or calculate shop status on the server
  const currentDay = WhatDay(); // Current day (e.g., "Monday")
  const officeOpenNum = isOfficeOpen(); // Office status (0, 1, 2, 3)

  // Map the status number to a readable string
  const shopStat = {
    0: 'closed',
    1: 'open',
    2: 'closing',
    3: 'opening',
  };

  const shopStatNum = shopStat[officeOpenNum]; // Get the status text

  const shopStatusClasses = {
    closed: 'closed',
    open: 'open',
    closing: 'closing',
    opening: 'opening',
  };

  const timetable = [
    { day: 'Monday', hours: '8 AM–5 PM' },
    { day: 'Tuesday', hours: '8 AM–5 PM' },
    { day: 'Wednesday', hours: '8 AM–5 PM' },
    { day: 'Thursday', hours: '8 AM–5 PM' },
    { day: 'Friday', hours: '8 AM–5 PM' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <table className="openinghours">
      <tbody>
        {timetable.map((entry, index) => (
          <tr
            key={index}
            id={entry.day}
            className={
              entry.day === currentDay ? shopStatusClasses[shopStatNum] : ''
            }
          >
            <th>{entry.day}</th>
            <td className="text-right">{entry.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
