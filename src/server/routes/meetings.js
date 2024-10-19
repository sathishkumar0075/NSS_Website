import { query } from '../db/index.js';
import express from 'express';

const router = express.Router();


// Route to create a new meeting
router.post('/', async (req, res) => {
    const { title, date, time, venue, description, purpose } = req.body;
    console.log(req.body);
  
    try {
      const result = await query(
        `INSERT INTO meetings (title, date, time, venue, description, purpose)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [title, date, time, venue, description, purpose]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    }
  });
  
  // Route to get all meetings
  router.get('/', async (req, res) => {
    try {
      const result = await query('SELECT * FROM meetings ORDER BY date, time');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    }
  });


router.get('/summa',(req,res)=>{
    return res.json('Meetings');
})

  export default router;