"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const guests = searchParams.get("guests");
  const name = searchParams.get("name");
  const contact = searchParams.get("contact");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Thank You {name} for Your Booking!</h1>
        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Booking Summary</h2>
          <p className="text-lg font-medium text-gray-600"><strong>Date:</strong> {date}</p>
          <p className="text-lg font-medium text-gray-600"><strong>Time:</strong> {time}</p>
          <p className="text-lg font-medium text-gray-600"><strong>Guests:</strong> {guests}</p>
          <p className="text-lg font-medium text-gray-600"><strong>Name:</strong> {name}</p>
          <p className="text-lg font-medium text-gray-600"><strong>Contact:</strong> {contact}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
