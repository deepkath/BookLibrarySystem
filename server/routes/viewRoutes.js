const express = require('express');
const path = require('path');

const router = express.Router();

//const __dirname = path.resolve();
router.use(express.static(path.join(__dirname, "../../dist")));

router.get(['/','/details/*','/addNew'], (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

module.exports = router;