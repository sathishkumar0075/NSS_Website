import { query } from '../db/index.js';
import express from 'express';

const router = express.Router();

// Get attendance records for a specific user


router.get('/:unitId', async (req, res) => {
  
  const { unitId } = req.params;
  console.log("Server Unit ID : ",unitId) // Extract userId from the URL parameters
  console.log("User id : ",unitId);

  try {
    // Execute SQL query, properly formatting the userId value in quotes

    const result = await query(
      `SELECT * FROM students WHERE unit = '${unitId}'` // Query with reg_no formatted correctly
    );
    console.log(result);

    // Send the data back as JSON
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: 'No attendance data found for this user.' });
    }
  } catch (err) {
    console.error('Error fetching attendance data:', err);
    res.status(500).json({ message: 'Error fetching attendance data' });
  }
});


// Add a new attendance record for a user
router.post('/', async (req, res) => {
  const { date, type, topic, attended, user_id } = req.body;
  try {
    const result = await query(
      'INSERT INTO attendance (date, type, topic, attended, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [date, type, topic, attended, user_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/save', async (req, res) => {
  const { attendanceData, meetings_id, unit } = req.body;
  try {
    // Loop through each student in the attendance data and insert their attendance
    for (const student of attendanceData) {
      const { register_no, status } = student;  // Extract reg_no and status from each student object
      const insertAttendance = `INSERT INTO master_attendance (reg_no, meetings_id, status, unit) VALUES ($1, $2, $3, $4)`;
      
      // Insert the attendance data for each student
      await query(insertAttendance, [register_no, meetings_id, status, unit]);
    }

    // Send a success response
    res.status(200).json({ message: 'Attendance saved successfully' });
  } catch (error) {
    console.error('Error saving attendance:', error);
    res.status(500).json({ message: 'Failed to save attendance' });
  }
});




router.get("/", (req, res) => {
  res.json({ message: "Attendance" });
});


export default router;
