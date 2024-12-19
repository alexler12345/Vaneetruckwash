// Function to check if the office is open

export default function isOfficeOpen () {
  var isOpen = false
  const officeHours = {
    Monday: { start: '08:00:00', end: '17:00:00' },
    Tuesday: { start: '08:00:00', end: '17:00:00' },
    Wednesday: { start: '08:00:00', end: '17:00:00' },
    Thursday: { start: '08:00:00', end: '17:00:00' },
    Friday: { start: '08:00:00', end: '17:00:00' },
    Saturday: { start: null, end: null },
    Sunday: { start: null, end: null }
  }
  const dayHours = officeHours[new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    weekday: 'long'
  }).format(new Date())]

  const adjustTime = (time, hours) => {
    if (!time) return null // Handle closed days
    const [hour, minute, second] = time.split(':').map(Number)
    const date = new Date()
    date.setHours(hour + hours, minute, second) // Add/subtract hours
    return date.toTimeString().split(' ')[0] // Return in HH:MM:SS format
  }
  const startBuffer = adjustTime(dayHours.start, -2) // 2 hours before start
  const endBuffer = adjustTime(dayHours.end, -2) // 2 hours before end
  //console.log(`Buffer Start: ${startBuffer}, Buffer End: ${endBuffer}`) //dev

  const serverTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    hour: '2-digit',
    minute: '2-digit',
   second: '2-digit',
   hour12: false
  }).format(new Date())
  const current = new Date(`1970-01-01T${serverTime}Z`)
  const start = new Date(`1970-01-01T${dayHours.start}Z`)
  const end = new Date(`1970-01-01T${dayHours.end}Z`)

  if (current >= start && current <= end) {
    isOpen = true //open
  }
  if (serverTime < startBuffer || serverTime > dayHours.end) {
   isOpen= false
    
  }
  return isOpen;
}


