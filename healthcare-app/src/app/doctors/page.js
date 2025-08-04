"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const imageFallbacks = ["/doctor1.jpg", "/doctor2.jpg", "/doctor3.jpeg"];

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="text"
        placeholder="Search doctor by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          width: "100%",
          maxWidth: "400px",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredDoctors.map((doctor, index) => (
          <li
            key={doctor.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", // align image+text and button
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src={imageFallbacks[index % imageFallbacks.length]}
                alt={doctor.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "2px solid #eee",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/doctor1.jpg";
                }}
              />
              <div>
                <h3 style={{ margin: "0 0 0.5rem 0" }}>{doctor.name}</h3>
                <p>Specialty: {doctor.specialty}</p>
                <p>Location: {doctor.location}</p>
                <p>Experience: {doctor.experience} years</p>
              </div>
            </div>

            <button
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert(`Booked visit with Dr. ${doctor.name}`)}
            >
              Book Clinic Visit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
