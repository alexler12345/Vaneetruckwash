function Title() {
  console.log('it looks like your looking at the  source code lucky for you all of it is on https://github.com/alexler12345/vtww-v3.beta.git')

  return (
    <>
      <div className="text-center">
        {/*please do not remove i do would like credit thx :) <3*/}
        <div dangerouslySetInnerHTML={{__html: '<!--it looks like your looking at the  source code lucky for you all of it is on https://github.com/alexler12345/vtww-v3.beta.git-->'}}/>
        <a href="https://vaneetruckwash.net" className="inline-block">
          <h1
            className="text-5xl bg-gradient-to-r from-blue-600 to-blue-400 text-transparent 
              bg-clip-text hover:scale-110 hover:duration-100 active:scale-95 
              cursor-pointer transition-transform select-none lg:text-8xl mt-4"
          >
            Vanee Truck Wash
          </h1>
        </a>

        <hr className="border mt-6 mb-3"></hr>
      </div>
    </>
  );
}

export default Title;