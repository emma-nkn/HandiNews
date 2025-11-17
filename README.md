# 🌐 HandiNews – Application de Newsletter en Temps Réel

HandiNews est une application web full-stack qui diffuse en temps réel des articles sur le handicap et les innovations dans ce domaine.  
Les utilisateurs peuvent s’abonner à une newsletter afin de recevoir régulièrement un résumé des meilleures actualités.  
L'application comprend également une interface d’administration permettant de gérer les abonnés.

---

## 📌 Objectifs du projet

- Informer sur le handicap et les innovations accessibles.
- Offrir un service de newsletter simple et automatisé.
- Permettre à un administrateur de gérer les abonnés.
- Mettre en pratique un stack JavaScript complet : **Front-end + Back-end**.
- Développer un projet professionnel en respectant les bonnes pratiques (MVC, API REST, documentation…).

---

## Architecture du projet

HandiNews/
│
├── frontend/
│ ├── index.html
│ ├── articles.html
│ ├── admin.html
│ └── main.js
│
├── backend/
│ ├── server.js
│ ├── routes/
│ │ ├── articles.js
│ │ └── newsletter.js
│ ├── controllers/
│ │ ├── articlesController.js
│ │ └── newsletterController.js
│ ├── database/
│ │ └── connection.js
│ └── cron/
│ └── sendNewsletter.js
│
└── README.md

## 🚀 Fonctionnalités principales

### 👨‍💻 Côté utilisateur (Front-end)

- Consultation d’articles mis à jour en temps réel.
- Interface responsive en **Bootstrap 5**.
- Formulaire d’abonnement à la newsletter.
- Confirmation d’inscription.

### 🛠 Côté serveur (Back-end)

- API REST en **Node.js + Express**.
- Routes :
  - `GET /articles` → récupérer les articles
  - `POST /subscribe` → ajouter un abonné
  - `GET /subscribers` → voir les abonnés
  - `DELETE /subscribers/:id` → supprimer un abonné
- Validation des emails et gestion des erreurs.
- Connexion à une base **MySQL**.

### ✉️ Automatisation newsletter

- Envoi d’emails via **Nodemailer**.
- Template email HTML personnalisé.
- Tâche automatique programmée via **node-cron**.

### 🔐 Back-office admin

- Liste des abonnés
- Suppression d’un abonné
- Interface Bootstrap simple

---

## 🧰 Technologies utilisées

### Front-end :

- HTML5
- CSS3
- JavaScript ES6
- **Bootstrap 5**

### Back-end :

- Node.js
- Express.js
- Nodemailer
- node-cron

### Base de données :

- MySQL / MariaDB

### Outils :

- Git & GitHub
- Postman
- VS Code

---

## Plan de développement (Roadmap)

<!-- Sprint 1 : Front-end -->

Maquette Bootstrap
Pages HTML
Consommer l’API des articles

<!-- Sprint 2 : Back-end -->

Setup Express
Routes API
Connexion MySQL

<!-- Sprint 3 : Newsletter -->

Envoi mail
Template HTML
Cron job

<!-- Sprint 4 : Admin & Finition -->

Page admin
Debug & tests
Hébergement

## Installation du projet

git clone ...
cd HandiNews
npm install
npm start
