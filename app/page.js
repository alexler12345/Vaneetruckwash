
import CookieConsent from "@/components/cookiesconsent";
import Footer from "@/components/footer";
import Title from "@/components/title";
import Contact from "@/components/contact";
import Time from "@/components/time/time";
export default function Home() {
 
  
  return (
    <>
        <Title />
    
    <div className="pclooksMain">
    <div className="pclooks">
    <Contact />
    <div className="maps p-7 flex justify-center pb-7 h-[700px]">
      <iframe className="maps-i rounded shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595.262829162146!2d-112.78889920314327!3d49.70887519830226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e8710830c5649%3A0x8d83a8b4adcc88c6!2sVanee%20Truck%20Wash!5e0!3m2!1sen!2sca!4v1726847676663!5m2!1sen!2sca"
        height="100%" width="95%" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
    </div>
    </div>
    <div className="pclooks2">
   
    <Time />
    
    </div>
    </div>
    <CookieConsent />
    
    <Footer />
        </>
  );
}
