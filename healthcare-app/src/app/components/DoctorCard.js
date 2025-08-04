import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "./DoctorCard";
import './globals.css';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors")
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {doctors.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} />
      ))}
    </div>
  );
};

export default Doctors;
