// routes/events.js

import express from 'express';
import multer from 'multer';
import path from 'path';
import { query } from '../db/index.js';

const router = express.Router();

// Function to generate random numbers within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Default profile image URL
const defaultProfileImageUrl =
  'https://cdn.builder.io/api/v1/image/assets/TEMP/1852c618a50dabebf29b34d94c81d63c224d466c4bf239d9499a10d0e97fbe85?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307';

// Set up Multer storage configuration
const __dirname = path.resolve();
const uploadsDir = path.join(__dirname, 'uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + getRandomNumber(1000, 9999) + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

// Initialize Multer
const upload = multer({ storage: storage });

// Route to add a new event with random likes, comments, and shares
router.post('/add', upload.fields([{ name: 'event_image' }, { name: 'profile_image' }]), async (req, res) => {
  try {
    const { title, description } = req.body;

    // Access the uploaded files
    const eventImageFile = req.files['event_image'] ? req.files['event_image'][0] : null;
    const profileImageFile = req.files['profile_image'] ? req.files['profile_image'][0] : null;

    // Get the file paths or use default URL for profile image
    const eventImagePath = eventImageFile ? `/uploads/${eventImageFile.filename}` : null;
    const profileImagePath = profileImageFile
      ? `/uploads/${profileImageFile.filename}`
      : defaultProfileImageUrl;

    // Generate random values for likes, comments, and shares
    const likes = getRandomNumber(100, 10000); // Likes between 100 and 10,000
    const comments = getRandomNumber(10, 1000); // Comments between 10 and 1,000
    const shares = getRandomNumber(5, 500); // Shares between 5 and 500

    // Insert the new event into the database
    const newEvent = await query(
      'INSERT INTO events (title, description, event_image, profile_image, likes, comments, shares) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, description, eventImagePath, profileImagePath, likes, comments, shares]
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
