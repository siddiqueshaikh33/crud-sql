
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    } else {
        console.log('Connected to the database');
    }
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM student', (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }
    });
});

app.post('/add', (req, res) => {
    const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?, ?)";
    const values = [
        req.body.name,
        req.body.email
    ];
    connection.query(sql, values, (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }
    });
});

app.put('/edit/:id', (req, res) => {
    const sql = "UPDATE student set Name= ? , Email = ? WHERE id = ?";
    const values = [
        req.body.name,
        req.body.email
    ];
    const id = req.params.id
    connection.query(sql, [...values,id], (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }
    });
});

app.delete('/dlt/:id', (req, res) => {
    const sql = 'DELETE FROM student WHERE ID = ?';
    const id = req.params.id;
  
    connection.query(sql, [id], (err, data) => {
      if (err) {
        console.error('Error deleting the item:', err);
        return res.status(500).json({ error: 'An error occurred while deleting the item.' });
      } else {
        if (data.affectedRows === 0) {
          return res.status(404).json({ message: 'Item not found.' });
        }
        return res.status(200).json({ message: 'Item deleted successfully.' });
      }
    });
  });
  



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
