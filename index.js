const express = require('express');
const app = express();
const PORT = process.env.port || 8081;
const cors = require('cors');
const sqlite = require('sqlite3').verbose();

app.use(cors());

let db = new sqlite.Database('test.db');
db.run(`DELETE FROM users WHERE username=""`);
db.close();

app.get('/', (req, res, next) => {
    let db = new sqlite.Database('test.db');
    let usernames = {"users": []};
    
    db.all(`SELECT * FROM users`, [], (err, rows) => {
        if (err) {
            res.status(501).send('INTERNAL SERVER ERROR!');
            return;
        }
        
        for (let i = 0;i < rows.length;i++) {
            usernames['users'].push(rows[i].username);
        }
        res.status(200).send(usernames);
    });
    db.close();
});

app.post('/', (req, res, next) => {
    let db = new sqlite.Database('test.db');
    if (req.query.name == "") {
        res.status(404).send('INVALID INPUT!');
    }
    db.run(`INSERT INTO users(username) VALUES(?)`, [req.query.name], (err) => {
        if (err) {
            console.log(err.message);
        } else {
            res.status(202).send();
        }
    });
    db.close();
});

app.listen(PORT, () => {
    console.log('Listening on PORT: ' + PORT);
});