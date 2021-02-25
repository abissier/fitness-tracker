const router = require("express").Router();
const path = require("path");

//-----------------------HTML Routes---------------------------------
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));
});

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/stats.html'));
});

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/exercise.html'));
});

module.exports = router;
