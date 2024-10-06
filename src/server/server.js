import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
const app = express()


const port = 5000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "todo",
    password: "2113",
    port: 5432,

});

db.connect();


app.use(express.json());

app.use(express.static("public"));
app.use(cors());


app.get("/posts", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM todo");
        console.log(result.rows);
        return res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred while fetching posts." });
    }
});

app.post("/edit", async (req, res) => {
    const id = parseInt(req.body.id);
    const text = req.body.text;
    console.log(id,text);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
  
    try {
      const result = await db.query("UPDATE todo SET name = $1 WHERE id = $2 RETURNING *", [text, id]);
  
      // Check if the update affected any rows
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      res.status(200).json({ message: 'Todo updated successfully' });
    } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  app.delete("/delete", async (req, res) => {
    const id = parseInt(req.body.id);
    
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID' });
    }
    console.log("Delete : ",id)

    try {
        const result = await db.query("DELETE FROM todo WHERE id = $1", [id]);
        
        // Check if any rows were affected
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/add",async(req,res)=>{
    const text = req.body.text;
    console.log(text);

    try{
      await db.query("INSERT INTO todo(name) VALUES($1)",[text]);
      res.status(200).json({"Message":"Successfully added"})

    }catch(err){
      console.log(err);
    }
})

app.listen(port,()=>{
    console.log("Sever Listening at port 5000");
})