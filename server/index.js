const express = require('express');
const port = process.env.port || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Hej fra serveren!"})
})

app.listen(port, () => {
    console.log(`Serveren kører på port ${port}`)
})