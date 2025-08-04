'use client';

import React from 'react';

export default function SecurityHelpPage() {
  return (
    <div className="security-help-container">
      <h1 className="security-help-title">Security & Help</h1>
      <p className="security-help-subtext">
        Your privacy and safety are our top priority. Here's how we protect you and where to get help.
      </p>

      <div className="security-section">
        <h2>🔒 Data Security</h2>
        <ul className="security-list">
          <li>✓ All data is encrypted using industry-grade standards (SSL/TLS)</li>
          <li>✓ Your medical records are private and never shared without consent</li>
          <li>✓ HIPAA & ISO 27001 compliant systems</li>
        </ul>
      </div>

      <div className="security-section">
        <h2>🙋 Help & Support</h2>
        <ul className="security-list">
          <li>✓ 24/7 email support at <strong>support@practo.com</strong></li>
          <li>✓ Call us at <strong>+91-9876543219</strong> for urgent queries</li>
          <li>✓ Visit our <strong>FAQs</strong> for common issues and solutions</li>
        </ul>
      </div>

      <div className="security-section">
        <h2>🛡️ Report an Issue</h2>
        <p>If you suspect a security breach or need help with your account, contact us immediately.</p>
        <button className="security-btn" onClick={() => alert("Support request submitted!")}>
          Report Now
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Practo. All rights reserved.</p>
          <div className="footer-links">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
