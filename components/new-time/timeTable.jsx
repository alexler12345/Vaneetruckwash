'use client'
import './time.css'
import isOfficeOpen from '../subComp/isOpen'
import { useEffect } from 'react'


export default function Timetable () {
  
 
  const isOpen= isOfficeOpen() 
  
 useEffect(() => {


 const day = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    weekday: 'long'
  }).format(new Date())
const t = document.getElementById(new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Denver',
  weekday: 'long'
}).format(new Date()))

  if (isOpen) {
    t.classList.add('open')
  } if (!isOpen){
    t.classList.add('closed')
  } 

 })
  return (
    <table className='openinghours'>
      <tbody>
        <tr id='Monday'>
          <th>Monday</th>
          <td className='text-right'>8 AM–5 PM</td>
        </tr>
        <tr id='Tuesday'>
          <th>Tuesday</th>
          <td className='text-right'>8 AM–5 PM</td>
        </tr>
        <tr id='Wednesday'>
          <th>Wednesday</th>
          <td className='text-right'>8 AM–5 PM</td>
        </tr>
        <tr id='Thursday'>
          <th>Thursday</th>
          <td className='text-right'>8 AM–5 PM</td>
        </tr>
        <tr id='Friday'>
          <th>Friday</th>
          <td className='text-right'>8 AM–5 PM</td>
        </tr>
        <tr id='Saturday'>
          <th>Saturday</th>
          <td className='text-right'>Closed</td>
        </tr>
        <tr id='Sunday'>
          <th>Sunday</th>
          <td className='text-right'>Closed</td>
        </tr>
      </tbody>
    </table>
  )
}
