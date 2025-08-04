'use client';

import React from 'react';

export default function ProvidersPage() {
  const handleApply = () => {
    document.cookie = 'providerApplication=submitted; path=/;';
    alert('Thanks for applying! Our team will reach out to you shortly.');
  };

  return (
    <div className="provider-container">
      <h1 className="provider-heading">Join as a Healthcare Provider</h1>
      <p className="provider-subtext">
        Are you a doctor, clinic, or hospital? Partner with us to reach more patients and grow your practice.
      </p>

      <div className="provider-section">
        <h2>Why Partner With Us?</h2>
        <ul className="provider-list">
          <li>✓ Access to thousands of online consultations</li>
          <li>✓ Manage appointments with a smart dashboard</li>
          <li>✓ Increase visibility across India</li>
          <li>✓ Seamless integration with your existing systems</li>
          <li>✓ Secure & HIPAA-compliant platform</li>
        </ul>
      </div>

      <div className="provider-section">
        <h2>Requirements</h2>
        <ul className="provider-list">
          <li>✓ Valid medical license or hospital registration</li>
          <li>✓ Internet-enabled device for video consultation</li>
          <li>✓ Willingness to serve patients with empathy</li>
        </ul>
      </div>

      <button onClick={handleApply} className="provider-btn">Apply Now</button>
    </div>
  );
}
