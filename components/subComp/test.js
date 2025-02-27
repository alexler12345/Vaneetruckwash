export function FormCal(uncloned) {
  var raw = structuredClone(uncloned).items;

  const numtoMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function convertTo12Hour(start, end) {
    if (!start && !end) {
      return "Closed";
    } else {
      const [hours1, minutes1, seconds1] = start.split(":").map(Number);
      const [hours2, minutes2, seconds2] = end.split(":").map(Number);
      
      const period1 = hours1 >= 12 ? "PM" : "AM";
      const period2 = hours2 >= 12 ? "PM" : "AM";
      const hours122 = hours2 % 12 || 12;
      const hours121 = hours1 == 0 ? "MIDNIGHT" : hours1; // Convert "0" to "12" for midnight
      let timeOne = `${hours121} : ${hours1 == 0? '':minutes1== 0? '00':minutes1} ${hours1 == 0 ? "" : period1}`;
      let timeTwo = `${hours122} : ${minutes2== 0? '00':minutes2} ${period2}`;

      return [timeOne, timeTwo];
    }
  }

  const numtoDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //makes officeHours object template
  var officeHours = {};
  for (let i = 0; i < 7; i++) {
    officeHours[numtoDay[i]] = {
      start: null,
      end: null,
      isallday: false,
      closedDayMod: false,
      closedDayModTimeString: null,
    };
  }
 
  
  //for loop that goes through every item on list
  const check = raw.forEach((element) => {
    if (element.summary.toUpperCase().includes("CLOSED")) {
      let start = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Denver",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date(element.start.dateTime));

      let end = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Denver",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date(element.end.dateTime));
      var time = convertTo12Hour(start, end);
      var month = numtoMonth[new Date(element.start.dateTime).getMonth()];
      var day = new Date(element.start.dateTime).getDate();

      if (element.start.date) {
        officeHours[numtoDay[new Date(element.start.date).getDay() + 1]].closedDayMod = true
         
        officeHours[numtoDay[new Date(element.start.date).getDay() + 1]].closedDayModTimeString = 
          `ALL BAYS CLOSED FOR MAINTENANCE ON
          ${month.toUpperCase()}
          ${day}
          FROM
          ${time[0]}
          TO
          ${time[1]}`
        
      } else {
        officeHours[numtoDay[new Date(element.start.dateTime).getDay()]].closedDayMod = true;
        
        officeHours[numtoDay[new Date(element.start.dateTime).getDay()]].closedDayModTimeString = 
         `ALL BAYS CLOSED FOR MAINTENANCE ON
          ${month.toUpperCase()}
          ${day}
          FROM
          ${time[0]}
          TO
          ${time[1]}`
      }
    } else {
      if (!element.start.dateTime) {
        var dayOfItem = numtoDay[new Date(element.start.date).getDay() + 1];

        officeHours[dayOfItem].isallday = true;
      } else {
        var o = numtoDay[new Date(element.start.dateTime).getDay()]; //get the day of the event

        let start = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Denver",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date(element.start.dateTime)); //format it into this format: 00:00:00 for start time

        let end = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Denver",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date(element.end.dateTime)); //format it into this format: 00:00:00 for end time

        officeHours[o].start = start; //assign formated time to object for start and end
        officeHours[o].end = end;
      }
    }
  });

  check;
  

  return officeHours;
}
