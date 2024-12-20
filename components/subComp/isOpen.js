// Function to check if the office is open

export const theDay = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Denver',
  weekday: 'long'
}).format(new Date())

export default function isOfficeOpen () {
  var isOpen = null
  const officeHours = {
    Monday: { start: '08:00:00', end: '17:00:00' },
    Tuesday: { start: '08:00:00', end: '17:00:00' },
    Wednesday: { start: '08:00:00', end: '17:00:00' },
    Thursday: { start: '08:00:00', end: '17:00:00' },
    Friday: { start: '08:00:00', end: '17:00:00' },
    Saturday: { start: null, end: null },
    Sunday: { start: null, end: null }
  }

  const dayHours = officeHours[theDay]

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
