//Jeg opretter en server med express, så jeg via den kan skabe forbindelse til min database. 
// I package.json i min client-folder hvor mit react-projekt ligger, tilføjer jeg "proxy": "http://localhost:3001", 
// for at forbinde serveren med mit projekt.

const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api", (req,res)=>{
db.query("SELECT * FROM banner", (err,result)=>{
    if(err) {
    console.log(err)
    } 

res.send(result)
console.log(result)

});   

});

app.listen(port, () => {
    console.log(`Serveren kører på ${port}`)
  })
