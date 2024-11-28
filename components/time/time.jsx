import './time.css';
import Image from 'next/image';

function Time() {
const clockIconSize = 47;

  return (
    <>
     <div className="timeMain pb-1 order-2 lg:pt-6 flex justify-center">
      <div className="times px-9 p-5 border border-solid border-[#ddd] rounded-lg shadow-lg bg-[#f9f9f9] transition-all duration-300 ease-in-out max-w-[83%] lg:max-w-[1000px] lg:p-10 lg:shadow-xl ">
        <div className="card-header flex justify-between items-center pb-2.5 border-b border-solid border-[#ddd] m-2.5 lg:pb-4 lg:mb-4">
          <div className="media-body">
            <h4 className="OpeningT font-sans text-[#333] text-bold m-0 md:text-2xl text-xl">Office Hours</h4>
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

export default Time