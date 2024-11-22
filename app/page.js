import Link from "next/link";

export default function Home() {
  const contactIconSize = 20;
  const contactIconCSS = "mr-2 fill-blueCustom";
  const transTemp = "transition-all duration-300 ease-in-out";
  return (
    <>
    <div className="text-center ">
    <a href="#" className="inline-block">
  <h1
    className="text-5xl bg-gradient-to-r from-blue-600 to-blue-400 text-transparent 
      bg-clip-text hover:scale-110 hover:duration-100 active:scale-95 
      cursor-pointer transition-transform select-none
      
      ">
    Vanee Truck Wash
  </h1>
</a>

     <h1 className="text-2xl cursor-default select-none">&quot;Where Big Rigs Shine and Trailers Sparkle&quot;</h1>
     <hr className="border mt-6 mb-3"></hr>
    </div>
    
    <div className="pclooksMain">
    <div className="pclooks">
    <div className="contactinfoMain">
      <div className="contactinfo flex flex-col p-5 rounded-md max-w-md items-start transition-all duration-300 ease-in-out">
        <a className="contactinfo-a focus:shadow-boxFocus focus:outline-none py-2.5 px-5 rounded-md no-underline bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:shadow  active:translate-y-0.5 text-blueCustom text-base flex items-center mb-2.5" href="tel: +1 403-320-6060"><img src="images/phone.svg" alt="" width={contactIconSize} height={contactIconSize} className={contactIconCSS}></img> +1 403-320-6060</a>
        <a className="contactinfo-a focus:shadow-boxFocus focus:outline-none py-2.5 px-5 rounded-md no-underline bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:shadow  active:translate-y-0.5 text-blueCustom text-base flex items-center mb-2.5" href="mailto: truckwash@vaneelive.com"><img  src="images/mail.svg" alt="" width={contactIconSize} height={contactIconSize} className={contactIconCSS}></img> truckwash@vaneelive.com</a>
        <a className="contactinfo-a focus:shadow-boxFocus focus:outline-none py-2.5 px-5 rounded-md no-underline bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:shadow  active:translate-y-0.5 text-blueCustom text-base flex items-center mb-2.5" href="https://www.google.com/maps?cid=10197179475260377286"><img src="images/place.svg" alt="" width={contactIconSize} height={contactIconSize} className={contactIconCSS}></img> 3716 9 Ave N, Lethbridge,
          AB</a>
      </div>
    </div>
    <div className="maps p-7 flex justify-center pb-7 h-[700px]">
      <iframe className="maps-i rounded shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595.262829162146!2d-112.78889920314327!3d49.70887519830226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e8710830c5649%3A0x8d83a8b4adcc88c6!2sVanee%20Truck%20Wash!5e0!3m2!1sen!2sca!4v1726847676663!5m2!1sen!2sca"
        height="100%" width="95%" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
    </div>
    </div>
    <div className="pclooks2">
    <div className="timeMain">
      <div className="times p-5 border border-solid border-[#ddd] rounded-lg shadow-lg bg-[#f9f9f9] transition-all duration-300 ease-in-out">
        <div className="card-header flex justify-between items-center pb-2.5 ">
          <div className="media-body">
            <h4 className="OpeningT">Opening Hours</h4>
          </div>
          <i className="far fa-clock fa-3x" style={{opacity: 0.2}}></i>
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
    
    
    </div>
    </div>
    
    
    <footer className="footer">
    <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=61558004790927" target="_blank"><i
          className="fab fa-facebook-f"></i></a>
      <a href="#" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
      <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
    </div>
    <p>&copy; 2024 Vanee Truck Wash. All Rights Reserved.</p>
    </footer>
        </>
  );
}
