import './time.css'
import Timetable from './timeTable'
//start of class
export default function NewTime (i) {
 

  return (
    <>
      <div className='flex justify-center order-2 mb-3 lg:pt-6 pb-1 timeMain'>
        <div className='border-2 dark:border-accent dark:bg-primary shadow-lg lg:shadow-xl px-9 p-5 lg:p-10 border-borderlight border-solid rounded-lg max-w-[83%] lg:max-w-[1000px] transition-all duration-300 ease-in-out times'>
         
          <Timetable {...i} />
        </div>
      </div>
    </>
  )
}
