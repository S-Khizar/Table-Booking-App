"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router=useRouter();
  const [form, setForm] = useState({ date: '', time: '', guests: '', name: '', contact: '' });
  const [loading, setLoading] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchAvailableTimes = async (selectedDate) => {
    try {
      console.log(selectedDate);
      const response = await fetch(`/api/availablity?date=${selectedDate}`);
      const data = await response.json();

      if (response.ok) {
        setAvailableTimes(data.availableTimes);
      } else {
        setError(data.error || 'Unable to fetch available times.');
      }
    } catch (err) {
      setError('Error fetching available times.');
      console.error(err);
    }
  };

  useEffect(() => {
    if (form.date) {
      fetchAvailableTimes(form.date);
    }
  }, [form.date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/bookingtable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
     
      const bookingDetails = new URLSearchParams(form).toString();
      router.push(`/bookingsummary?${bookingDetails}`);
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen '>
       <form onSubmit={handleSubmit} className=" w-full mx-auto bg-gray-900 p-6 rounded shadow text-red-700  ">
      <h2 className="text-2xl font-bold mb-4">Book a Table</h2>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      
     
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Time</label>
        <select
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        >
          <option value="" disabled>Select a time</option>
          {availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))
          ) : (
            <option value="" disabled>No available times</option>
          )}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Number of Guests</label>
        <input
          type="number"
          name="guests"
          value={form.guests}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
          min="1"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Contact</label>
        <input
          type="text"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 ${loading && 'opacity-50 cursor-not-allowed'}`}
        disabled={loading}
      >
        {loading ? 'Booking...' : 'Submit'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>

    </div>
   
  );
};

export default Page;























