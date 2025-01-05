"use client";
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react';

const BookingSummary = () => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState({});

  useEffect(() => {

    setParams({
      date: searchParams.get("date"),
      time: searchParams.get("time"),
      guests: searchParams.get("guests"),
      name: searchParams.get("name"),
      contact: searchParams.get("contact"),
    });
  }, [searchParams]);

  if (!params.name) {

    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Thank You {params.name} for Your Booking!</h1>
        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Booking Summary</h2>
          <p className="text-lg font-medium text-gray-600"><strong>Date:</strong> {params.date}</p>
          <p className="text-lg font-medium text-gray-600"><strong>Time:</strong> {params.time}</p>
          <p className="text-lg font-medium text-gray-600"><strong>Guests:</strong> {params.guests}</p>
          <p className="text-lg font-medium text-gray-600"><strong>Name:</strong> {params.name}</p>
          <p className="text-lg font-medium text-gray-600"><strong>Contact:</strong> {params.contact}</p>
        </div>
      </div>
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading Booking Summary...</div>}>
    <BookingSummary />
  </Suspense>
);

export default Page;
