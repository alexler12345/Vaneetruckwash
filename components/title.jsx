
function Title(raw) {
  
  const numtoDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];



 


  var i =0
  return (
    <>
      <div className="text-center">
        {/*please do not remove i do would like credit thx :) <3*/}
        <div dangerouslySetInnerHTML={{__html: '<!--it looks like your looking at the  source code lucky for you all of it is on https://github.com/alexler12345/Vaneetruckwash.git-->'}}/>
        <a href="https://vaneetruckwash.net" className="inline-block">
          <h1
            className="bg-clip-text bg-gradient-to-r from-titlecard to-secondary2 mt-4 text-5xl text-transparent lg:text-8xl transition-transform hover:duration-100 cursor-pointer select-none hover:scale-110 active:scale-95"
          >
            Vanee Truck Wash
          </h1>
        </a>
        
        {[...Array(7)].map((_, index) => {
          const data = raw[1][numtoDay[index]]
          
          
          if (data.closedDayMod) {
            i++
          }

          return (
            <>
        <hr className={`mt-6 border ${data.closedDayMod && i==1? '':'!hidden'}`}></hr> 
        
       
        <div className={`${data.closedDayMod && i==1? 'bg-red-600 w-full h-max text-white': ''}`}>{data.closedDayMod && i==1?data.closedDayModTimeString:''}</div>
        </>
          )
      })}

        </div>
     
    </>
  );
}

export default Title;