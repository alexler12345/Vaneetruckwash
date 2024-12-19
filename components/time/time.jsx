import './time.css';
import Image from 'next/image';

function Time() {
const clockIconSize = 47;

  return (
    <>
     <div className="flex justify-center order-2 lg:pt-6 pb-1 timeMain">
      <div className="border-[#ddd] bg-[#f9f9f9] shadow-lg lg:shadow-xl px-9 p-5 lg:p-10 border border-solid rounded-lg max-w-[83%] lg:max-w-[1000px] transition-all duration-300 ease-in-out times">
        <div className="flex justify-between items-center border-[#ddd] m-2.5 lg:mb-4 pb-2.5 lg:pb-4 border-b border-solid card-header">
          <div className="media-body">
            <h4 className="m-0 font-sans text-[#333] text-bold text-xl md:text-2xl OpeningT">Office Hours</h4>
          </div>
          <Image src="images/clock.svg" alt="" width={clockIconSize} height={clockIconSize} />
        </div>
        <table className="openinghours">
          <tbody>
            <tr id="Monday">
              <th>Monday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Tuesday">
              <th>Tuesday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Wednesday">
              <th>Wednesday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Thursday">
              <th>Thursday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Friday">
              <th>Friday</th>
              <td className="text-right">8 AM–5 PM</td>
            </tr>
            <tr id="Saturday">
              <th>Saturday</th>
              <td className="text-right">Closed</td>
            </tr>
            <tr id="Sunday">
              <th>Sunday</th>
              <td className="text-right">Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr className='border-0 mt-7'></hr>
    </>

  );
}

