import { query } from '../db/index.js';
import express from 'express';

const router = express.Router();

// Get attendance records for a specific user
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const result = await query('SELECT * FROM attendance WHERE user_id = $1 ORDER BY date ASC', [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
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

export default router;
