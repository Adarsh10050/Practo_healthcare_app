'use client';

import React from 'react';

export default function SurgeriesPage() {
  const handleSurgeryBook = () => {
    document.cookie = 'surgeryBooking=confirmed; path=/;';
    alert('Surgery consultation booked and cookie set!');
  };

  return (
    <div className="surgeries-container">
      <h1 className="surgeries-heading">Explore Surgeries We Offer</h1>
      <p className="surgeries-subtext">
        Get access to safe, advanced, and affordable surgeries with top hospitals and surgeons.
      </p>

      <div className="surgery-card">
        <h2>General Surgery</h2>
        <p>Appendix removal, hernia repair, and more.</p>
        <button onClick={handleSurgeryBook} className="book-btn">Book Now</button>
      </div>

      <div className="surgery-card">
        <h2>Orthopedic Surgery</h2>
        <p>Knee replacement, bone fractures, and more.</p>
        <button onClick={handleSurgeryBook} className="book-btn">Book Now</button>
      </div>

      <div className="surgery-card">
        <h2>Eye Surgery</h2>
        <p>LASIK, cataract removal, and other vision care treatments.</p>
        <button onClick={handleSurgeryBook} className="book-btn">Book Now</button>
      </div>
    </div>
  );
}
