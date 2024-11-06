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
  router.get("/:meetingId", async (req, res) => {
    const { meetingId } = req.params;
   // res.json({"result" : meetingId});
    const meetingIdInt = parseInt(meetingId);
  
    // Ensure meetingId is a valid number
   // const meetingIdInt = parseInt(meetingId, 10);
    
    if (isNaN(meetingIdInt)) {
      return res.status(400).json({ error: 'Invalid meeting ID' });
    }
  
    try {
      const result = await query('SELECT * FROM meetings WHERE id = $1', [meetingIdInt]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Meeting not found' });
      }
  
      res.status(200).json({"name":result.rows[0].title,"date":result.rows[0].date});
  
    } catch (error) {
      console.error('Error fetching meeting data:', error);
      res.status(500).json({ error: 'Failed to fetch meeting data, please try again later' });
    }
  });
  

  router.post('/:id/attendance', async (req, res) => {
    const { id } = req.params;
    try {
      // Update attendance status to 'Taken'
      await pool.query('UPDATE meetings SET status = $1 WHERE id = $2', ['Taken', id]);
      res.sendStatus(204); // No content
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: 'Database error' });
    }
  });



router.get('/summa',(req,res)=>{
    return res.json('Meetings');
})

export default router;