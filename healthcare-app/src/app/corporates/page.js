'use client';

import React from 'react';

export default function CorporatePage() {
  const handleConnectClick = () => {
    document.cookie = 'corporateInquiry=initiated; path=/;';
    alert('Thanks for your interest! Our team will connect with you soon.');
  };

  return (
    <div className="corporate-container">
      <h1 className="corporate-heading">Corporate Healthcare Solutions</h1>
      <p className="corporate-subtext">
        Empower your employees with comprehensive health and wellness services.
      </p>

      <div className="corporate-section">
        <h2>What We Offer</h2>
        <ul className="corporate-list">
          <li>✓ Preventive health checkups</li>
          <li>✓ Mental wellness programs</li>
          <li>✓ 24x7 online doctor consultations</li>
          <li>✓ Health insurance and coverage support</li>
          <li>✓ Vaccination & medical camps at your office</li>
        </ul>
      </div>

      <div className="corporate-section">
        <h2>Benefits for Your Company</h2>
        <p>
          Boost employee productivity, reduce absenteeism, and build a healthier workforce with our customized corporate health plans.
        </p>
      </div>

      <button onClick={handleConnectClick} className="connect-btn">Connect with Us</button>
    </div>
  );
}
