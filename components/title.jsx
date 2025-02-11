function convertTo12Hour(start,end) {
  
  
  if (!start && !end) {
    return 'Closed'
  } else { 
   
  const [hours1, minutes1, seconds1] = start.split(':').map(Number);
  const [hours2, minutes2, seconds2] = end.split(':').map(Number);
 
  
  const period1 = hours1 >= 12 ? 'PM' : 'AM';
  const period2 = hours2 >= 12 ? 'PM' : 'AM';
  const hours122 = hours2 % 12 || 12;
  const hours121 = hours1==0?'MIDNIGHT':hours1; // Convert "0" to "12" for midnight
  let timeOne = `${hours121} ${hours1 ==0?'': period1}`
  let timeTwo = `${hours122} ${period2}`;
  
    return [timeOne,timeTwo]
  
}

}



function Title(raw) {
 
if (raw.length > 1 ) {
var filtered = raw[1].items.filter(element => {
 return element.summary.toUpperCase().includes('CLOSED')
});
}


const filter = filtered && filtered.length >0 ?filtered[0]:'rubber'


  
  
  const numtoMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  if (filter !== 'rubber' && filter.start.dateTime && filter.end.dateTime) {
  
    let start = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Denver',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(new Date(filter.start.dateTime))
    
    let end = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Denver',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(new Date(filter.end.dateTime))
   var time = convertTo12Hour(start,end)
   var month = numtoMonth[new Date(filter.start.dateTime).getMonth()]
   var day = new Date(filter.start.dateTime).getDate()
  
  }


  return (
    <>
      <div className="text-center">
        {/*please do not remove i do would like credit thx :) <3*/}
        <div dangerouslySetInnerHTML={{__html: '<!--it looks like your looking at the  source code lucky for you all of it is on https://github.com/alexler12345/vtww-v3.beta.git-->'}}/>
        <a href="https://vaneetruckwash.net" className="inline-block">
          <h1
            className="bg-clip-text bg-gradient-to-r from-titlecard to-secondary2 mt-4 text-5xl text-transparent lg:text-8xl transition-transform hover:duration-100 cursor-pointer select-none hover:scale-110 active:scale-95"
          >
            Vanee Truck Wash
          </h1>
        </a>
        
        {/*mb-3 */}
        <hr className={`mt-6 border${!time ? 'mb-3': ''}`}></hr> 
        {/*TEMP */}
        <div className={`${time ? 'bg-red-600 w-full h-max text-white': ''}`}>{filter !== 'rubber' ? ` ALL BAYS CLOSED FOR MAINTENANCE ON ${month.toUpperCase()} ${day} FROM ${time[0]} TO ${time[1]}`: ''}</div>
      </div>
     
    </>
  );
}

export default Title;