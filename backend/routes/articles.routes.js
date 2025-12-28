const express = require("express");
const router = express.Router();

// Exemple de "base de données" en mémoire
const articles = [
  {
    id: 1,
    titre: "Technologies d'assistance",
    categorie: "Innovation",
    resume: "Des exosquelettes de pointe aux prothèses bioniques...",
  },
  {
    id: 2,
    titre: "Accessibilité numérique",
    categorie: "Innovation",
    resume: "Le web de demain sera inclusif ou ne sera pas...",
  },
  {
    id: 3,
    titre: "Urbanisme inclusif",
    categorie: "Innovation",
    resume: "Comment la Smart City s'adapte-t-elle au handicap ?",
  },
];

// GET /api/articles -> liste tous les articles
router.get("/", (req, res) => {
  res.json(articles);
});

// GET /api/articles/:id -> récupère un article par son ID
router.get("/:id", (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ message: "Article non trouvé" });
  res.json(article);
});

module.exports = router;
