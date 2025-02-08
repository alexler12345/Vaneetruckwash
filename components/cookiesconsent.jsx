"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowPopup(false);
  };
  return (
    <>
      {showPopup && (
        <div className="right-4 md:right-8 bottom-4 left-4 md:left-8 z-50 fixed border-gray-300 bg-white shadow-lg p-4 border rounded-lg text-sm md:text-base">
          <div className="flex md:flex-row flex-col justify-between md:items-center">
            <p className="mb-4 md:mb-0 text-gray-700">
              We use cookies to ensure you get the best experience on our website. By continuing, you agree to our
              <Link
                href="/privacy-policy"
                className="ml-1 text-blue-600 hover:text-blue-500 underline"
              >
                Privacy Policy
              </Link>.
            </p>
            <button
              onClick={handleAccept}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-white transition duration-200"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
