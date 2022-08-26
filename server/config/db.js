//Jeg skaber forbindelse til min sql-database.
//Hvis jeg vil skjule mine oplysninger, kan jeg oprette en .env-fil med disee, så de ikke kan tilgås fra mit repository.

const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'space'
})

module.exports = db;