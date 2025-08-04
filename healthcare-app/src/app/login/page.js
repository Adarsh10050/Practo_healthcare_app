"use client";
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>Login</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;
