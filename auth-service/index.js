const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// DB en memoria o archivo local
const db = new sqlite3.Database('./auth.db');
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`);
});

// Registrar usuario
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const stmt = db.prepare('INSERT INTO users(name, email, password) VALUES (?, ?, ?)');
  stmt.run(name, email, password, function(err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ id: this.lastID, name, email });
  });
  stmt.finalize();
});

// Listar usuarios
app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(3001, () => console.log('AuthService listening on port 3001'));
