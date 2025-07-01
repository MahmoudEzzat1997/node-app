const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // To parse JSON bodies

// Basic GET endpoint
app.get('/', (req, res) => {
  res.send('Welcome to my REST API');
});

// GET all users (dummy example)
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Mahmoud' },
    { id: 2, name: 'Amina' }
  ]);
});

// POST create user
app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created', user: newUser });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 API is running at http://localhost:${port}`);
  console.log(`🚀 API is running at http://localhost:${port}`);

});
