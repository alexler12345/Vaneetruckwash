import CookieConsent from '@/components/cookiesconsent';
import Footer from '@/components/footer';
import Title from '@/components/title';
import NewContact from '@/components/new-contact';
import NewTime from '@/components/new-time/time';


export const metadata = {
  title: 'Vanee Truck Wash',
  description: 'Locally owned and operated forever washing trucks, trailers and RVs',
};

export default function Home() {
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
          <NewTime t={false} />
        </div>
      </div>

      {/* Uncomment this code when ToS and PP are done (talk to Davin about HR team or some lawyers to make it) */}
      {/*<CookieConsent />*/}

      <Footer />
    </>
  );
}
