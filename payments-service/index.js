const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// DB
const db = new sqlite3.Database('./payments.db');
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    amount REAL
  )`);
});

// Crear pago
app.post('/payment', (req, res) => {
  const { userId, amount } = req.body;
  const stmt = db.prepare('INSERT INTO payments(userId, amount) VALUES (?, ?)');
  stmt.run(userId, amount, function(err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ id: this.lastID, userId, amount });
  });
  stmt.finalize();
});

// Listar pagos
app.get('/payments', (req, res) => {
  db.all('SELECT * FROM payments', (err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(3002, () => console.log('PaymentsService listening on port 3002'));
