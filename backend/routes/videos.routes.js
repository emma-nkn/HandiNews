const express = require("express");
const router = express.Router();
const videos = require("../database/videos");

// GET toutes les vidéos
router.get("/innovation", (req, res) => {
  res.render("innovation", { videos });
});

module.exports = router;
