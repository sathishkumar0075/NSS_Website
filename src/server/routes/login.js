import { query } from '../db/index.js';
import express from 'express';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const router = express.Router();



router.post('/', async (req, res) => {
    const { email, password } = req.body;
    console.log("Pinged at Login");
    console.log(req.body);
    try {
      const result = await query('SELECT * FROM students WHERE email = $1', [email]);
      const user = result.rows[0];
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: user.id, role: user.role }, "Vettaiyan", { expiresIn: '1h' });
      res.json({ token,reg_no:user.register_no,role: user.role });
      console.log("Successfully logged in");
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

router.get("/",(req,res)=>{
    return res.json({"message" : "Enna Thala"});
})

export default router;