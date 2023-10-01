import express, { json } from 'express';
import mysql from 'mysql';

// Express config
const app = express();
const port = 3000;

// MySQL config
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'node_db',
}

// MySQL initial population
const connection = mysql.createConnection(config);
const sql = `INSERT INTO people(name) VALUES('Gabriel')`;
connection.query(sql);

// Ports and routes
app.get('/', (req, res) => {

    // MySQL query
    const sql = `SELECT * FROM people`;
    connection.query(sql, (err, result) => {
        if (err) throw err;

        // HTML response
        let html = '<h1>Full Cycle Rocks!</h1>';
        html += '<h2>MySQL Database Values:</h2>'
        html += '<ul>';
        result.forEach(element => {
            html += `<li><h2>${element.name}</h2></li>`;
        });
        html += '</ul>';
        res.send(html);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
