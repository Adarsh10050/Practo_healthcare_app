"use client";
import React from "react";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form className="auth-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link href="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
