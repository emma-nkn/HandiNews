const express = require("express");
const router = express.Router();
const { videos, techVideos, accesVideos } = require("../database/videos");

// GET toutes les vidéos
router.get("/innovation", (req, res) => {
  res.render("innovation", {
    title: "Innovations - HandiTech",
    videos,
    techVideos,
    accesVideos,
  });
});

module.exports = router;
