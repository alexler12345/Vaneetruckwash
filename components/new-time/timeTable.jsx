'use client'
import './time.css'
import { useState } from 'react'





// Function to check if the office is open

export const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Denver',
  weekday: 'long'
})


function convertTo12Hour(start,end) {
  
  if (!start || !end) {
    return 'Closed'
  }
  const [hours1, minutes1, seconds1] = start.split(':').map(Number);
  const [hours2, minutes2, seconds2] = end.split(':').map(Number);
  const period1 = hours1 >= 12 ? 'PM' : 'AM';
  const period2 = hours2 >= 12 ? 'PM' : 'AM';
  const hours122 = hours2 % 12 || 12;
  const hours121 = hours1 % 12 || 12; // Convert "0" to "12" for midnight
  return `${hours121} ${period1}-${hours122} ${period2}`;
}





function isOfficeOpen (who) {


  var isOpen = null
 
  
  
  
  var dayHours = who[formatter.format(new Date())]

 if (dayHours.isallday) {
  return isOpen = true
 }

  const serverTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(new Date())
  
 

  if (serverTime >= dayHours.start && serverTime <= dayHours.end) {
    isOpen = true //open
  }
  if (serverTime < dayHours.start || serverTime > dayHours.end) {
    isOpen = false
  }
  return isOpen
}



export default function Timetable (p) {
  //true = office hours //false = bay hours
  const [Timedata, setTimedata] = useState(0)

 
 
  const who = structuredClone(p[Timedata])



  console.log(
    'it looks like your looking at the  source code lucky for you all of it is on https://github.com/alexler12345/Vaneetruckwash.git'
  )

    

  
  const today = new Date() // Current date
  const next7Days = []

  // Loop to get the current day and the next 6 days
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(today) // Clone the current date
    nextDay.setDate(today.getDate() + i) // Increment the date
    next7Days.push(formatter.format(nextDay)) // Format and add to the array
    
  }

  const toggleData = () => {
    setTimeout(3000)
    setTimedata((prevIndex) => (prevIndex === 1 ? 0 : 1))
  }

  
  const clockIconSize = 47

  return (
    <>
   
   <div className='flex justify-between items-center m-2.5 lg:mb-4 pb-2.5 lg:pb-4 border-b border-b-highlight card-header'>
          <div tabIndex={0} className='flex border-2 focus:border-5 shadow-sm focus:border-blue-100 rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0.5 duration-300 select-none ease-in-out' onClick={toggleData}>
          <div className='media-body'>
                    <h4
                      
                      className='m-0 font-sans text-[#333] text-bold text-xl md:text-2xl dark:text-text1 OpeningT'
                    >
                      {Timedata == 0 ? 'Office hours' : 'Bay hours'}
                    </h4>
                  </div>
                  
                    <svg
                      className='pr-1'
                      fill='#000000'
                      width='32px'
                      height='32px'
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                      <g
                        id='SVGRepo_tracerCarrier'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></g>
                      <g id='SVGRepo_iconCarrier'>
                        <path d='M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z'></path>
                      </g>
                    </svg>
                  
          </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    className='dark:fill-text1 fill-[#333]'
                    width={clockIconSize}
                    height={clockIconSize}
                  >
                    <path d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'></path>
                  </svg>
                </div>
  
   <table className="openinghours">
      <tbody>
      {[...Array(7)].map((_, index) => {
    const dayData = who[next7Days[index]] || {}; // Use default empty object
    return (
      <tr
        tabIndex={0}
        title={Timedata == 1 ? 'Bay hours' : 'Office hours'}
        key={index}
        id={index.toString()}
        className={`focus:border-3 focus:border-blue-100 ${
          index == 0 ? !isOfficeOpen(who) ? 'closed' : 'open':''
        }`}
      >
        <th>{next7Days[index]}</th>
        <td
          className={`text-right ${
            convertTo12Hour(dayData.start, dayData.end) === 'Closed' &&
            dayData.isallday === false
              ? 'offDays'
              : ''
          }`}
        >
          {dayData.isallday && dayData.start == null
            ? '24 hours'
            : convertTo12Hour(dayData.start, dayData.end)}
        </td>
      </tr>
    );
})}

      </tbody>
    </table>
    </>
  )
}
