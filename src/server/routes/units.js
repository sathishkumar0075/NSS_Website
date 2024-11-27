import { query } from '../db/index.js';
import express from 'express';

const router = express.Router();


// Backend route to get student data by unit number
router.get('/:unitId', async (req, res) => {
    const { unitId } = req.params;
    console.log("Fetching students for unit:", unitId);  // Log for debugging
  
    try {
      const result = await query(
        `SELECT * FROM students WHERE unit = $1`, [unitId]
      );
  
      if (result.rows.length > 0) {
        res.status(200).json(result.rows);  // Return student data as JSON
      } else {
        res.status(404).json({ message: 'No students found for this unit.' });
      }
    } catch (err) {
      console.error('Error fetching student data:', err);
      res.status(500).json({ message: 'Error fetching student data' });
    }
  });

export default router;

