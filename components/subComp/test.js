export function FormCal (l) {
  
    
  try {
  console.log(l.length)
  } catch {
    console.error("data may be null")
  }
  const data = l
  const numtoDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  var officeHours = {
    Monday: { start: null, end: null, isallday: false },
    Tuesday: { start: null, end: null, isallday: false },
    Wednesday: { start: null, end: null, isallday: false },
    Thursday: { start: null, end: null, isallday: false },
    Friday: { start: null, end: null, isallday: false },
    Saturday: { start: null, end: null, isallday: false },
    Sunday: { start: null, end: null, isallday: false }
  }

  var temp = data.items

  


  for (var i = 0; i < temp.length; i++) {
    if (!temp[i].start.dateTime) {
      var k = numtoDay[new Date(temp[i].start.date).getDay() + 1]
      officeHours[k].isallday = true
    } else {
      var o = numtoDay[new Date(temp[i].start.dateTime).getDay()]
     
      officeHours[o].start = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date(temp[i].start.dateTime))
     officeHours[o].start == '24:00:00' ? officeHours[o].start='00:00:00':''
      officeHours[o].end = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date(temp[i].end.dateTime)) 
       
    }
  
  }


  return officeHours
}
