const express = require("express");
const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Import des routes
const articleRoutes = require("./routes/articles.routes");
app.use("/api/articles", articleRoutes);

const videoRoutes = require("./routes/videos.routes");
app.use("/api/videos", videoRoutes);

// Route racine
app.get("/", (req, res) => {
  res.send("API HandiNews opérationnelle ");
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
