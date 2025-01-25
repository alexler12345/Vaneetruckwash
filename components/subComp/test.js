export function FormCal (l) {
  
    

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
    Monday: { start: null, end: null, isallday: false, title: ''},
    Tuesday: { start: null, end: null, isallday: false, title: ''},
    Wednesday: { start: null, end: null, isallday: false, title: ''},
    Thursday: { start: null, end: null, isallday: false, title: ''},
    Friday: { start: null, end: null, isallday: false , title: ''},
    Saturday: { start: null, end: null, isallday: false, title: ''},
    Sunday: { start: null, end: null, isallday: false, title: ''}
  }

  var temp = data.items

  


  for (var i = 0; i < temp.length; i++) {
    if (!temp[i].start.dateTime) {//if true then that day is all day
      var k = numtoDay[new Date(temp[i].start.date).getDay() + 1]
      officeHours[k].isallday = true
    } else {
      var o = numtoDay[new Date(temp[i].start.dateTime).getDay()]
     
     
     let start = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date(temp[i].start.dateTime))
     
        let end = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date(temp[i].end.dateTime)) 
      if (temp[i].summary == 'CLOSED') {
       officeHours[o].title = temp[i].summary
      } 
      officeHours[o].start = start 
      officeHours[o].end = end
      
      
      }
  
  }


  return officeHours
}
