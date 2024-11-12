import { query } from "../db/index.js";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = "Vettaiyan"; // Add JWT_SECRET in your .env file

// Registration route
// router.post('/register', async (req, res) => {
//   const {
//     name,
//     registerNo,
//     branch,
//     yearOfStudy,
//     dob,
//     gender,
//     bloodGroup,
//     email,
//     mobile,
//     aadharNo,
//     password,
//   } = req.body;

//   // Validate required fields
//   if (!name || !registerNo || !email || !password) {
//     return res.status(400).json({ error: 'Name, Register No, Email, and Password are required.' });
//   }

//   // Handle optional date input
//   const dobValue = dob ? dob : null;

//   try {
//     // Hash the password before storing
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert into the database
//     const result = await query(
//       `INSERT INTO students (name, register_no, branch, year_of_study, dob, gender, blood_group, email, mobile, aadhar_no, password)
//        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
//       [name, registerNo, branch, yearOfStudy, dobValue, gender, bloodGroup, email, mobile, aadharNo, hashedPassword]
//     );

//     res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

router.post("/", async (req, res) => {
  
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
    password,
  } = req.body;
  console.log("Pinged at register : ",req.body);

  try {
    // Fetch the current number of students in each unit
    const units = Array.from({ length: 10 }, (_, i) => i + 1);
    const unitCapacities = {};

    for (let unit of units) {
      const result = await query(
        "SELECT COUNT(*) FROM students WHERE unit = $1",
        [unit]
      );
      unitCapacities[unit] = parseInt(result.rows[0].count, 10);
    }

    // Find the unit with the least number of students (less than 100 capacity)
    let assignedUnit = null;
    for (let unit of units) {
      if (unitCapacities[unit] < 100) {
        assignedUnit = unit;
        break; // Assign to the first unit with space
      }
    }
    console.log("Assigned Unit : ",assignedUnit);

    if (!assignedUnit) {
      return res
        .status(400)
        .json({ error: "All units are full. Cannot register student." });
    }

    // Insert the student data into the students table with the assigned unit
    const insertQuery = `
      INSERT INTO students (
  name, 
  register_no, 
  branch, 
  year_of_study, 
  dob, 
  gender, 
  blood_group, 
  email, 
  mobile, 
  aadhar_no, 
  password, 
  unit
)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    `;
    console.log(insertQuery);
    const hashedPassword = await bcrypt.hash(password, 10);

    await query(insertQuery, [
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
      hashedPassword,
      assignedUnit,
    ]);

    return res
      .status(200)
      .json({ message: "Registration successful", unit: assignedUnit });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", (req, res) => {
  return res.json("Hello");
});

export default router;
