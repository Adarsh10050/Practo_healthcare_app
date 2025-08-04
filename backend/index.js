const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Smith",
    specialty: "Dermatologist",
    location: "Delhi",
    fees: 500,
    photo: "/doctor1.jpg" // use filename only
  },
  {
    id: 2,
    name: "Dr. Jones",
    specialty: "Pediatrician",
    location: "Mumbai",
    fees: 600,
    photo: "/doctor2.jpg"
  },
  {
    id: 3,
    name: "Dr. White",
    specialty: "Gynecologist",
    location: "Bangalore",
    fees: 700,
    photo: "/doctor3.jpeg"
  }
];


// API route to get filtered doctors
app.get('/api/doctors', (req, res) => {
  const query = req.query.query?.toLowerCase() || '';
  const filtered = doctors.filter(doc =>
    doc.specialty.toLowerCase().includes(query)
  );
  res.json(filtered);
});

// Optional: Root route to verify server
app.get('/', (req, res) => {
  res.send("API is running. Try /api/doctors");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running at: http://localhost:${PORT}`);
});
