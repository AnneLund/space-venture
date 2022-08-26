//Jeg opretter en server med express så jeg via den, kan skabe forbindelse til min database. 
// I package.json i min client-folder hvor mit react-projekt ligger, tilføjer jeg "proxy": "http://localhost:3002", 
// for at forbinde serveren med mit projekt.
const express = require('express');

//Jeg importerer min database
const db = require('./config/db')

//Cors er en browser-sikkerheds funktion der undersøger om HTTP-requests bliver sendt/modtaget fra det samme domæne og ikke fra en 3. part.
const cors = require('cors')

//Jeg deklarerer en variabel som påkalder min server hver gang.
const app = express();
const port = 3002;

//Jeg tillader her at alle sider kan tilgå mine data via min server. Hvis det kun er nogle der skal have tilladelse,
//kan jeg fx skrive: app.use(cors({ origin: ['https://www.google.com/']}))
app.use(cors());

//Nedenstående metode skal jeg bruge til mine POST-requests, så min database kan modtage
//mit objekt som et JSON-objekt.
app.use(express.json())

//For at sende/modtage data bruger jeg HTTP metoderne GET og POST
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

//Min post-metode der sørger for at de indtastede data bliver tilføjet i min sql-database
app.post("/api/newsletter", (req, res) => {
    const email = req.body.email
    db.query(`INSERT INTO newsletter (email) VALUES ('${email}')`, (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    console.log(result)
    });      
})

//Via listen-funktionen tjekker jeg, om der er forbindelse til min server og port
//I konsollen skriver jeg nodemon index.js, når jeg har sikret mig at jeg er i min server-mappe
app.listen(port, () => {
    console.log(`Serveren kører på ${port}`)
  })
