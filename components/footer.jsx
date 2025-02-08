"use client";

import { useState } from "react";
import Image from "next/image";
const Footer = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleClick = (e, message) => {
    e.preventDefault(); // Prevent navigation
    setErrorMessage(message);
  };

  const closePopup = () => {
    setErrorMessage(null);
  };

  const footerIcon = 22; // Replace this value with your desired icon size
 
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#333] text-white p-5 text-center">
        <div className="mb-2.5 flex flex-row justify-center">
          <a
            className="text-white my-0 mx-2.5 text-2xl"
            href="https://www.facebook.com/profile.php?id=61558004790927"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="images/facebook.svg"
              alt="Facebook"
              width={footerIcon-6}
              height={footerIcon-6}
            />
          </a>
          <a
            className="text-white my-0 mx-2.5 text-2xl"
            href="#"
            onClick={(e) =>
              handleClick(e, "Whoops! Our TikTok is currently under construction. Stay tuned!")
            }
          >
            <Image
              src="images/tiktok.svg"
              alt="TikTok"
              width={footerIcon}
              height={footerIcon}
            />
          </a>
          <a
            className="text-white my-0 mx-2.5 text-2xl"
            href="#"
            onClick={(e) =>
              handleClick(e, "Sorry! We’re still polishing up our Instagram. Check back soon!")
            }
          >
            <Image
              src="images/instagram.svg"
              alt="Instagram"
              width={footerIcon}
              height={footerIcon}
            />
          </a>
        </div>
        <p>&copy; 2024 Vanee Truck Wash. All Rights Reserved.</p>
      </footer>

      {/* Error Popup */}
      {errorMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-xl font-bold text-red-600 mb-2">Oops!</h2>
            <p className="text-gray-700 mb-4">{errorMessage}</p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
