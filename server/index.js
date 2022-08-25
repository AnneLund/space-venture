//Jeg opretter en server med express, så jeg via den kan skabe forbindelse til min database. 
// I package.json i min client-folder hvor mit react-projekt ligger, tilføjer jeg "proxy": "http://localhost:3001", 
// for at forbinde serveren med mit projekt.

const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const port = 3002;
app.use(cors());
app.use(express.json())

// Route til mit table i min database
app.get("/api", (req,res)=>{
db.query("SELECT * FROM banner", (err,result)=>{
    if(err) {
    console.log(err)
    } 

res.send(result)
console.log(result)
});   
});

//Route til mit table 'about' i min database

app.get("/api/about", (req,res)=>{
    db.query("SELECT * FROM about", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    console.log(result)
    });   
    });

    //Route til mit table 'team' i min database

app.get("/api/team", (req,res)=>{
    db.query("SELECT * FROM team", (err,result)=>{
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
