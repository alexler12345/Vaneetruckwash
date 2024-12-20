'use client'
import { useState } from "react";

export function NewBookingForm() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-white shadow-md mx-auto p-6 rounded-lg max-w-md">
      <h1 className="mb-6 font-bold text-2xl text-center">Booking Form</h1>

      {step === 0 && (
        <div>
          <label className="block mb-2 font-medium">Date Needed:</label>
          <input
            type="date"
            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handleNext}
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <label className="block mb-2 font-medium">Time Needed:</label>
          <input
            type="time"
            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block mb-2 font-medium">Driver Name:</label>
          <input
            type="text"
            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block mb-2 font-medium">Truck #:</label>
          <input
            type="text"
            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md"
            >
              Back
            </button>
            <button
              onClick={() => alert("Form Submitted!")}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
