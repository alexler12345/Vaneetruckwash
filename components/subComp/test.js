
export function FormCal (uncloned) {
  
    var t = structuredClone(uncloned)
    try {
    var raw = t.items.filter((element) => {
      return !element.summary.toUpperCase().includes('CLOSED') 
    })
  } catch (error) {
    console.warn(error)
  }
   

   



  
    

   
  
    
 
  const numtoDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  //makes officeHours object template
  var officeHours = {}
  for (let i = 0; i < 7; i++) {
    officeHours[numtoDay[i]]= {start: null, end: null, isallday: false}
  }

  
  console.log('hi')
  

const temp = raw[0]


//for loop that goes through every item on list
  for (var i = 0; i < temp.length; i++) {
    
    
//if true then that day is all day
    if (!temp[i].start.dateTime) {
      var k = numtoDay[new Date(temp[i].start.date).getDay() + 1]
      officeHours[k].isallday = true
    } //end of if statment
    //if event is not all day then do this
    else {
      
      var o = numtoDay[new Date(temp[i].start.dateTime).getDay()] //get the day of the event
     
     let start = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date(temp[i].start.dateTime)) //format it into this format: 00:00:00 for start time
     
        let end = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date(temp[i].end.dateTime)) //format it into this format: 00:00:00 for end time

      

      officeHours[o].start = start //assign formated time to object for start and end
      officeHours[o].end = end
      
      console.log('82 test')
      }
  
  }//end of for loop




  return officeHours
}
