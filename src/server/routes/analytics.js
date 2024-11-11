import { query } from '../db/index.js';
import express from 'express';

const router = express.Router();

// Get all students
router.get('/students', async (req, res) => {
  try {
    const result = await query('SELECT * FROM students ORDER BY unit, name');
    res.status(200).json(result.rows); // Send all students as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

router.get("/length",async(req,res)=>{
    console.log("Called");
    try {
      const result = await query('SELECT * FROM meetings');
  
     
  
      res.status(200).json({"length":result.rows.length});
  
    } catch (error) {
      console.error('Error fetching meeting data:', error);
      res.status(500).json({ error: 'Failed to fetch meeting data, please try again later' });
    }
});

router.get("/another",async(req,res)=>{
    console.log("Called");
    try {
      const result = await query('SELECT * FROM meetings');
  
     
  
      res.status(200).json({"length":result.rows.length});
  
    } catch (error) {
      console.error('Error fetching meeting data:', error);
      res.status(500).json({ error: 'Failed to fetch meeting data, please try again later' });
    }
});


// Get analytics for the admin dashboard
router.get('/', async (req, res) => {
  try {
    // Query the number of students per unit
    const unitCounts = await query(`
      SELECT unit, COUNT(*) AS student_count
      FROM students
      GROUP BY unit
      ORDER BY unit
    `);

    // Query the total number of students
    const totalStudents = await query('SELECT COUNT(*) AS total FROM students');

    // Query the count of students by role (e.g., admin, student, etc.)
    const roleCounts = await query(`
      SELECT role, COUNT(*) AS role_count
      FROM students
      GROUP BY role
    `);

    res.status(200).json({
      totalStudents: totalStudents.rows[0].total,
      unitCounts: unitCounts.rows,
      roleCounts: roleCounts.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});


router.get('/average', async (req, res) => {
  try {
    // Fetch attendance data for all students across all units
    const attendanceResult = await query(
      `SELECT reg_no, 
              COUNT(CASE WHEN status = 'Present' THEN 1 END) AS attended,
              COUNT(DISTINCT meetings_id) AS total_sessions
       FROM master_attendance
       GROUP BY reg_no`
    );

    if (attendanceResult.rows.length === 0) {
      return res.status(404).json({ message: 'No attendance data found for NSS.' });
    }

    // Calculate average attendance percentage for NSS
    let totalAttendancePercentage = 0;
    let studentCount = 0;

    attendanceResult.rows.forEach(student => {
      const attendedSessions = student.attended;
      const totalSessions = student.total_sessions;
      
      if (totalSessions > 0) {
        const attendancePercentage = (attendedSessions / totalSessions) * 100;
        totalAttendancePercentage += attendancePercentage;
        studentCount++;
      }
    });

    if (studentCount === 0) {
      return res.status(404).json({ message: 'No valid attendance data for NSS.' });
    }

    const averageAttendancePercentage = totalAttendancePercentage / studentCount;

    res.status(200).json({
      average_attendance_percentage: averageAttendancePercentage.toFixed(2)
    });

  } catch (err) {
    console.error('Error calculating average attendance for NSS:', err);
    res.status(500).json({ message: 'Error calculating average attendance for NSS' });
  }
});


// Update a student's role
router.put('/students/:id/role', async (req, res) => {
  const { id } = req.params;
  const { role } = req.body; // New role for the student
  
  try {
    const result = await query('UPDATE students SET role = $1 WHERE id = $2 RETURNING *', [role, id]);

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Role updated successfully', student: result.rows[0] });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update role' });
  }
});

export default router;
