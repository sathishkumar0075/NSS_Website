import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/posts", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM todo");
        console.log(rows);
        return res.json(rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred while fetching posts." });
    }
});


app.post("/edit",(req,res)=>{
    const id = parseInt(req.body.id);
    const text = req.body.text;
});



app.listen(port,()=>{
    console.log("Sever Listening at port 5000");
})