

import Image from "next/image";






function NewContact() {
  const contactIconSize = 20;
  const contactIconCSS = "mr-2 lg:mr-4 fill-highlight";


 
  return (
    <>

      <div className="flex flex-col items-start border-2 dark:border-accent bg-background m-5 lg:mb-32 rounded-md lg:rounded-lg max-w-md lg:max-w-[600px] transition-all duration-300 contactinfo ease-in-out lg:scale-110">
        <div className="bg-gradient-to-r from-60% from-contactBG to-background rounded-t-[5px] w-full">
          <div className="flex items-center active:shadow py-2.5 pr-3 pl-5 border-r-0 lg:text-xl no-underline active:translate-y-0.5">
            <a className="flex items-center lg:mr-4 pr-1.5 text-base lg:text-xl no-underline transition-all hover:-translate-y-0.5 duration-300 ease-in-out"
              href="tel: +1 403-320-6060">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    className={contactIconCSS} alt="Phone number" width={contactIconSize} height={contactIconSize}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
              +1 403-320-6060
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-r from-50% from-contactBorder w-full h-1"></div>
        <div className="bg-gradient-to-r from-75% from-contactBG w-full">

          <div className="flex items-center active:shadow lg:mr-2 py-2.5 pr-3 pl-5 border-r-0 lg:text-xl no-underline active:translate-y-0.5">
            <a className="flex items-center lg:mr-4 pr-1.5 text-base lg:text-xl no-underline transition-all hover:-translate-y-0.5 duration-300 ease-in-out"
              href="mailto: truckwash@vaneelive.com">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                alt="Email address" width={contactIconSize} height={contactIconSize} className={contactIconCSS}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
              
              reception@vaneelive.com
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-r from-75% from-contactBorder w-full h-1"></div>

        <div className="bg-gradient-to-r from-85% from-contactBG rounded-b-[5px] w-full">

          <div className="flex items-center active:shadow lg:mr-2 py-2.5 pr-3 pl-5 border-r-0 lg:text-xl no-underline active:translate-y-0.5">
            <a className="flex items-center lg:mr-4 pr-1.5 text-base lg:text-xl no-underline transition-all hover:-translate-y-0.5 duration-300 ease-in-out" href="https://www.google.com/maps?cid=10197179475260377286">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                          alt="Location" width={contactIconSize} height={contactIconSize+5} className={contactIconCSS}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 1.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
             
              3716 9 Ave N, Lethbridge, AB

            </a>
          </div>
        </div>
      </div>
      <hr className="md:border-0 border"></hr>

    </>
  );
}

export default NewContact