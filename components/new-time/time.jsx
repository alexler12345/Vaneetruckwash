

//0 = closed; 1 = open; 2 = closing; 3 = opening;
import './time.css'

import Timetable from './timeTable'
//start of class
export default function NewTime () {
  const clockIconSize = 47

  

  return (
    <>
      <div className='flex justify-center order-2 mb-3 lg:pt-6 pb-1 timeMain'>
        <div className='border-2 dark:border-accent dark:bg-primary shadow-lg lg:shadow-xl px-9 p-5 lg:p-10 border-borderlight border-solid rounded-lg max-w-[83%] lg:max-w-[1000px] transition-all duration-300 ease-in-out times'>
          <div className='flex justify-between items-center m-2.5 lg:mb-4 pb-2.5 lg:pb-4 border-b border-b-highlight card-header'>
            <div className='media-body'>
              <h4 className='m-0 font-sans text-[#333] text-bold text-xl md:text-2xl dark:text-text1 OpeningT'>
                Office Hours
              </h4>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='dark:fill-text1 fill-[#333]'
              width={clockIconSize}
              height={clockIconSize}
            >
              <path d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'></path>
            </svg>
          </div>
          <Timetable/>
        </div>
      </div>
    </>
  )
}
