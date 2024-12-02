import Image from "next/image";

function Contact() {
  const contactIconSize = 20;
  const contactIconCSS = "mr-2 fill-blueCustom lg:mr-4";
  
  return (
    <>
      <div className="contactinfoMain lg:mb-32">
        <div className="contactinfo flex flex-col p-5 rounded-md max-w-md items-start transition-all duration-300 ease-in-out lg:p-[30px] lg:rounded-xl lg:max-w-[600px]">
          <a className="contactinfo-a focus:shadow-boxFocus focus:outline-none py-2.5 px-5 rounded-md no-underline bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:shadow  active:translate-y-0.5 text-blueCustom text-base flex items-center mb-2.5 lg:text-xl lg:mr-4" href="tel: +1 403-320-6060"><Image src="images/phone.svg" alt="" width={contactIconSize} height={contactIconSize} className={contactIconCSS}  /> +1 403-320-6060</a>
          <a className="contactinfo-a focus:shadow-boxFocus focus:outline-none py-2.5 px-5 rounded-md no-underline bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:shadow  active:translate-y-0.5 text-blueCustom text-base flex items-center mb-2.5 lg:text-xl lg:mr-4" href="mailto: truckwash@vaneelive.com"><Image src="images/mail.svg" alt="" width={contactIconSize} height={contactIconSize} className={contactIconCSS} /> truckwash@vaneelive.com</a>
          <a className="contactinfo-a focus:shadow-boxFocus focus:outline-none py-2.5 px-5 rounded-md no-underline bg-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:shadow  active:translate-y-0.5 text-blueCustom text-base flex items-center mb-2.5 lg:text-xl lg:mr-4" href="https://www.google.com/maps?cid=10197179475260377286"><Image src="images/place.svg" alt="" width={contactIconSize} height={contactIconSize} className={contactIconCSS} target="_blank"/> 3716 9 Ave N, Lethbridge,
            AB</a>
        </div>
        <hr className="border md:border-0"></hr>
      </div>
    </>
  );
}

export default Contact