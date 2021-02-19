// import cookieParser from 'cookie-parser';
// import session from 'express-session';
const viewRoutes = require('./routes/viewRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');

const express = require("express");

const app = express();

// app.use(session({
//     secret: process.env.SESSION_SECRET || "SAsdsfdfsdf",
//     rolling: true,
//     cookie: { maxAge: +process.env.SESSION_TIMEOUT || 1000 },
//     resave: true,
//     saveUninitialized: true
// }));

app.use(express.urlencoded({extended: true})); // for reading request body as json
app.use(express.json());

// app.use(cookieParser());    // can read cookies via req.cookies

app.use('/', viewRoutes);

app.use('/api', apiRoutes);

app.use((req,res) => {
    res.status(404).json({
        message: "Resource missing!!!"
    });
});


const port = process.env.SERVER_PORT || 3000;
app.listen(port, ()=> console.log(`server started at port: ${[port]}`));