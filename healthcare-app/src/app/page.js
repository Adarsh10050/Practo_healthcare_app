'use client';
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    window.location.href = `/doctors?query=${searchQuery}&location=${location}`;
  };

  return (
    <div className="home-wrapper fade-in">
      <div className="search-area">
        <h1>Your home for health</h1>
        <div className="search-bar">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search doctors, clinics, hospitals, etc."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="popular-searches">
          <span>Popular Searches:</span>
          <div>
            <button>Dermatologist</button>
            <button>Pediatrician</button>
            <button>Gynecologist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
