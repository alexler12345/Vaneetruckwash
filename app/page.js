

export default function Home() {
  return (
    <>

    <div className="text-center bg-gradient-to-r from-blue-600 to-blue-500">
      <h1 className="text-5xl" href="#">Vanee Truck Wash</h1>
      <h1 className="text-2xl">"Where Big Rigs Shine and Trailers Sparkle"</h1>
    </div>
    
    <div className="pclooksMain">
    <div className="pclooks">
    <div className="contactinfoMain">
      <div className="contactinfo">
        <a className="contactinfo-a" href="tel: +1 403-320-6060"> +1 403-320-6060</a>
        <a className="contactinfo-a" href="mailto: truckwash@vaneelive.com"> truckwash@vaneelive.com</a>
        <a className="contactinfo-a" href="https://www.google.com/maps?cid=10197179475260377286"> 3716 9 Ave N, Lethbridge,
          AB</a>
      </div>
    </div>
    <div className="maps">
      <iframe className="maps-i"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595.262829162146!2d-112.78889920314327!3d49.70887519830226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e8710830c5649%3A0x8d83a8b4adcc88c6!2sVanee%20Truck%20Wash!5e0!3m2!1sen!2sca!4v1726847676663!5m2!1sen!2sca"
        height="100%" width="95%" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
    </div>
    </div>
    <div className="pclooks2">
    <div className="timeMain">
      <div className="times">
        <div className="card-header">
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
