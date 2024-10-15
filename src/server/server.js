import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import attendanceRoutes from './routes/attendance.js';
import registerRoutes from './routes/register.js';
import { query } from './db/index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/attendance', attendanceRoutes);
app.use('/api/register', registerRoutes);


app.post('/', async (req, res) => {
  //const { name, register_no, branch, year_of_study, dob, gender, blood_group, email, mobile, aadhar_no } = req.body;
  
  const {
      name,
      registerNo,
      branch,
      yearOfStudy,
      dob,
      gender,
      bloodGroup,
      email,
      mobile,
      aadharNo,
    } = req.body;
    console.log(req.body);
          // Validate inputs (simple example)
if (!name || !registerNo || !email) {
  return res.status(400).json({ error: 'Name, Register No, and Email are required.' });
}

// Handle optional date input
const dobValue = dob ? dob : null; // Use null for empty date
  console.log("Ping at register db");
  try {
    const result = await query(
      `INSERT INTO students (name, register_no, branch, year_of_study, dob, gender, blood_group, email, mobile, aadhar_no) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [name, registerNo, branch, yearOfStudy, dob, gender, bloodGroup, email, mobile, aadharNo]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.get('/',(req,res)=>{
  return res.json("Enna Pandrathu");
})


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
