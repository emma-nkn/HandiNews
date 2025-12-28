const express = require("express");
const router = express.Router();
const videos = require("../database/videos");

// GET toutes les vidéos
router.get("/", (req, res) => {
  res.json(videos);
});

module.exports = router;
