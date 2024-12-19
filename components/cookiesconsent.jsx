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
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-sm md:text-base">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-gray-700 mb-4 md:mb-0">
              We use cookies to ensure you get the best experience on our website. By continuing, you agree to our
              <Link
                href="/privacy-policy"
                className="text-blue-600 underline ml-1 hover:text-blue-500"
              >
                Privacy Policy
              </Link>.
            </p>
            <button
              onClick={handleAccept}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
