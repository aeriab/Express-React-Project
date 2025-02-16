const express = require('express')
const bcrypt = require('bcrypt'); // For password hashing
const app = express()
const port = 5000;

const secretKey = process.env.JWT_SECRET_KEY;

app.use(express.json()); // To parse JSON request bodies

const jwt = require('jsonwebtoken');

// In-memory storage for users (should replace with a database)
const users = []; // Array to store user objects

// Registration endpoint
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if username already exists
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    try {
        const saltRounds = 10; // Adjust for security/performance balance
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const newUser = {
        username,
        passwordHash,
        };

        users.push(newUser); // Store in memory (replace with database)

        res.status(201).json({ message: 'User registered successfully' }); // 201 Created
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(500).json({ message: 'Error during registration' });
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' }); // 401 Unauthorized
    }

    try {
        const passwordMatch = await bcrypt.compare(password, user.passwordHash);

        if (passwordMatch) {
            // 1. Define the payload:
            const payload = {
            userId: user._id, // Or user.id if you have that
            username: user.username,
            };
            const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
            res.json({ token });  // Send the token to the client
        } else {
        res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ message: 'Error during login' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});