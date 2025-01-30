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
const bodyParser = require('body-parser');
const flash = require("connect-flash");
const {rateLimit} = require('express-rate-limit');
const {RedisStore} = require('connect-redis');
const { createClient } = require('redis');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const os = require("node:os");
dotenv.config();

const corsOptions = {
    origin: `${process.env.FE_URL}`,
    credentials: true, // Allows cookies and authentication header
};

const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST}:6379`
});
redisClient.connect().catch(err => console.log(err));


// connect to DB, no DB now, do not open the comment below
db.connect();

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
// app.use(bodyParser.urlencoded({ extended: true }));

// JSON API
app.use(express.json());

// session
app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: '123456',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 60 * 60 * 1000 // 1h
    }
}));

app.use(cookieParser());

app.use(cors(corsOptions));

app.use(flash());

// app.use(rateLimit({
//     windowMs: 15 * 60 * 1000,
//     limit: 1000,
//     standardHeaders: 'draft-7',
//     legacyHeaders: false,
//     message: "Too many requests !!"
// }));

// rest method api
app.use(method_override('_method'));

// log
app.use(morgan('tiny'));

// app.get('/api', (req, res) => {
//     const host = os.hostname();
//     res.send(`API host: ${host}`);
// })

route(app);

app.listen(PORT,  () => console.log(`Running on http://localhost:${PORT}`));

