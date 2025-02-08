"use client";

import { useState } from "react";

export default function AlertPopup({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <h2 className="text-xl font-bold text-red-600 mb-2">Error Alert</h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => setIsVisible(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
