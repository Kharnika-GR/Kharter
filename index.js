const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Register endpoint with username
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Registration Error:', err.message);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// ✅ Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [email, password]
    );
    if (result.rows.length > 0) {
      res.json({ success: true, user: result.rows[0] });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).send('Error logging in');
  }
});

// ✅ Start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
