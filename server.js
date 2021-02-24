const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require('path');

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// connect to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myFirstDatabase",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

//-----------------------HTML Routes---------------------------------
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/stats.html'));
});

app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/exercise.html'));
});

// listen on port 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
