const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;
app.use(cors({
    origin: [
      'https://host-red-one.vercel.app',
      'https://remote-five-zeta.vercel.app'
    ],
    credentials: true, // allows cookies/authorization headers
  }));
 app.use(express.json());
 app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.status(200).json({ message: 'Login successful', token: '1234567890' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
 });
 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 });