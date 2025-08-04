// src/app/components/Header.js
"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      {/* Left section */}
      <div className="header-left">
        <Link href="/" className="logo">Practo</Link>
        <Link href="/doctors">Find Doctors</Link>
        <Link href="/video-consult">Video Consult</Link>
        <Link href="/surgeries">Surgeries</Link>
      </div>

      {/* Right section */}
      <div className="header-right">
        <Link href="/corporates">For Corporates</Link>
        <Link href="/providers">For Providers</Link>
        <Link href="/help">Security & Help</Link>
        <Link href="/login">
          <button className="login-button">Login / Signup</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
