'use client'
import './time.css'




// Function to check if the office is open




 



export default function Timetable () {
  

 

  
 
 


    

  
 

  

  return (
    <>
   
   <div className='flex justify-between items-center m-2.5 lg:mb-4 pb-2.5 lg:pb-4 border-b border-b-highlight card-header'>
   <div>
 
  <div className='media-body'>
    <h4
      className='m-0 font-sans text-[#333] text-bold text-xl md:text-2xl dark:text-text1 OpeningT'
    >
      {Timedata == 0 ? 'Office hours' : 'Bay hours'}
    </h4>
  </div>

  <svg
    className='pr-1'
    fill='#000000'
    width='32px'
    height='32px'
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    ></g>
    <g id='SVGRepo_iconCarrier'>
      <path d='M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z'></path>
    </g>
  </svg>
</div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    className='dark:fill-text1 fill-[#333]'
                    width='1'
                    height='1'
                  >
                    <path d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'></path>
                  </svg>
                </div>
  
   <table className="openinghours">
      
    </table>
    </>
  )
}
