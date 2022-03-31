const express = require('express');
const dotenv = require('dotenv');

// env vars
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));