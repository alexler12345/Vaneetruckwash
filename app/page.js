
import Footer from '@/components/footer';
import Title from '@/components/title';
import NewContact from '@/components/new-contact';
import NewTime from '@/components/new-time/time';
import { FormCal } from "@/components/subComp/test";
import { Defaulttime } from '@/components/subComp/calandertimes';


export const metadata = {
  title: 'Vanee Truck Wash',
  description: 'Locally owned and operated forever washing trucks, trailers and RVs',
};





export default async function Home() {
  const event = new Date()
  event.setUTCHours(23,59,59,59);
   event.getDate(event.setDate(event.getDate()+6))
   const events = new Date()
    events.setUTCHours(0,0,0,0);
   const calendarId = ["a16c4aac33575e5eddfc40fac317fc414d26f123a733f3651cacbe268e85f3a4@group.calendar.google.com","e6e9e8c902d57bb7f9d63b62c5831292c8246381ed1c6931e063168ba924bc24@group.calendar.google.com"]; // Replace with your calendar ID
   const baseUrl = "https://www.googleapis.com/calendar/v3/calendars";
   const apiKey = null; // Use your API key from environment variables
   var o = []
   if (!apiKey) {
    console.warn('No google API key found using default times')
    o[0] = Defaulttime[0]

    o[1] = Defaulttime[1]
   } else {
   
 for (let i=0; i<2; i++){

     const url = `${baseUrl}/${encodeURIComponent(calendarId[i])}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${events.toISOString()}&timeMax=${event.toISOString()}`;

//86400
try {

 const response = await fetch(url,{next: {revalidate: 5}})
 if (response.ok) {
  const data = await response.json()

  o[i] = FormCal(data)
  

 } else {
  console.warn('Promise resolved but HTTP status failed \n Using default times');
  o[i] = Defaulttime[i]
}
} catch {
console.error('Promise rejected');
}
 

  
 }
}

  return (
    <>

      <Title />

      <div
        className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-around lg:border-b lg:border-gray-200"
      >
        <div className="flex flex-col w-full lg:w-[41%]">
          <NewContact />
          <div className="maps p-7 flex justify-center pb-7 h-[700px] mt-12 sm:mt-12 md:mt-16 lg:mt-0">
            <iframe
              title="map of vanee truck wash area"
              className="rounded shadow-lg w-[95%] h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595.262829162146!2d-112.78889920314327!3d49.70887519830226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e8710830c5649%3A0x8d83a8b4adcc88c6!2sVanee%20Truck%20Wash!5e0!3m2!1sen!2sca!4v1726847676663!5m2!1sen!2sca"
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[50%]">
          <NewTime {...o}/>
        </div>
      </div>

      <Footer />
    </>
  );
}
