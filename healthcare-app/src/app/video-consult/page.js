'use client';

import React from 'react';

export default function VideoConsultPage() {
  const handleBookNow = () => {
    document.cookie = 'booking=confirmed; path=/;';
    alert('Booking confirmed and cookie set!');
  };

  return (
    <div className="video-consult-container">
      <h1 className="video-consult-heading">Book a Video Consultation</h1>
      <p className="video-consult-subtext">
        Connect with top doctors from the comfort of your home. Quick, safe, and convenient!
      </p>

      <div className="video-consult-card">
        <h1>Book a Video Consultation</h1>
        <p>Connect with top doctors from the comfort of your home.</p>
        <button onClick={handleBookNow} className="book-btn">
          Book Now
        </button>
      </div>

      <ul className="video-consult-list">
        <li>Talk to certified specialists over video call</li>
        <li>Get digital prescriptions instantly</li>
        <li>Schedule or reschedule anytime</li>
      </ul>
    </div>
  );
}
