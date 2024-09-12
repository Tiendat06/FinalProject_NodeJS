const express = require('express');
const app = express();
const db = require('./config/db');
const PORT = process.env.PORT || 3000;
const route = require('./routes');

const session = require('express-session')
const method_override = require("method-override");
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cloudinary = require('cloudinary');
const multer = require("multer");
dotenv.config();

// connect to DB, no DB now, do not open the comment below
// db.connect();

// cloudinary
cloudinary.v2.config({
    cloud_name: 'dervs0fx5',
    api_key: '195853691687668',
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
});

// middleware -> send JSON to server (form)
app.use(express.urlencoded({
    extended: true,
}));
// JSON API
app.use(express.json());

// session
app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 60 * 60 * 1000 // 1h
    }
}));

// rest method api
app.use(method_override('_method'));

// log
app.use(morgan('tiny'));

route(app);

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

