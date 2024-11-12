import { query } from '../db/index.js';
import express from 'express';

const router = express.Router();

// Function to generate random numbers within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Route to add a new event with random likes, comments, and shares
router.post('/add', async (req, res) => {
  const { title, description, event_image, profile_image } = req.body;
  
  // Generate random values for likes, comments, and shares
  const likes = getRandomNumber(100, 10000);  // Likes between 100 and 10,000
  const comments = getRandomNumber(10, 1000); // Comments between 10 and 1,000
  const shares = getRandomNumber(5, 500);     // Shares between 5 and 500
  
  try {
    const newEvent = await query(
      'INSERT INTO events (title, description, event_image, profile_image, likes, comments, shares) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, description, event_image, profile_image, likes, comments, shares]
    );
    res.status(201).json(newEvent.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add event' });
  }
});

// Route to get all events
router.get('/', async (req, res) => {
  try {
    const events = await query('SELECT * FROM events ORDER BY created_at DESC');
    res.json(events.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

export default router;
