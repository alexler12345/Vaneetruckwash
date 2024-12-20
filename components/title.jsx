



function Title() {
  
 
 
  const sign = ["Come in we're open","Sorry we're closed","Closing soon","Opening soon"]

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
        
        <hr className="mt-6 mb-3 border"></hr>
      </div>
    </>
  );
}

export default Title;