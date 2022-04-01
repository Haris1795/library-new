const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors')

const connectDB = require('./config/db')

// route files
const books = require('./routes/books');

// env vars
dotenv.config({ path: './config/config.env' });

// connect to database
connectDB()


const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

app.use('/api/v1/books', books)



const server = app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));

// handle promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    server.close(() => process.exit(1));
});