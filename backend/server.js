const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const path = require("path");
const videos = require("./database/videos");
const videoRoutes = require("./routes/videos.routes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
// console.log("Chemin vers assets :", path.join(__dirname, "..", "assets"));
app.use("/assets", express.static(path.join(__dirname, "..", "assets")));
app.set("views", path.join(__dirname, "/../templates"));

app.use("/", videoRoutes);

app.get("/", (req, res) => {
  res.render("index.ejs", { title: "Accueil - HandiNews" });
});

app.get("/innovation", (req, res) => {
  res.render("innovation.ejs", {
    title: "Innovations - HandiTech",
    videos: videos,
  });
});

app.get("/actualites", (req, res) => {
  res.render("actualites.ejs", { title: "Actualités" });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { title: "Nous contacter" });
});

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
