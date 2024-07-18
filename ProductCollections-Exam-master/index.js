const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');

const app = express();
const port = 2305;


app.listen(port, function() {
    console.log("Server is running....");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", 'ejs');
require("./model/database");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "t2305mabcd",
        cookie: {
            maxAge: 360000, // Miliseconds
            secure: false // true: SSL (https only)
        },
    })
);

// Import các routes
const webrouter = require("./routes/web.route");
app.use("/", webrouter);