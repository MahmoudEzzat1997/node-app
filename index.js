const express = require('express');
const app = express();

// ✅ Use Azure-assigned port in production
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome dddddddto my REST API');
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Mahmoud' },
    { id: 2, name: 'Amina' }
  ]);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created', user: newUser });
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
