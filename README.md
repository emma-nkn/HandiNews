HandiNews – Application de Newsletter en Temps Réel

Projet Full Stack JavaScript – Étudiante en Bachelor Développement Web & Mobile

HandiNews est une application web qui diffuse en temps réel des articles sur le handicap et les innovations dans ce domaine.
Les utilisateurs peuvent s’abonner à une newsletter intelligente qui envoie automatiquement un résumé des nouvelles actualités.
L’application comprend également une interface d’administration permettant de gérer les abonnés.

## ✨ Objectifs du projet

Informer sur le handicap et les innovations inclusives.

Proposer une newsletter automatisée pour faciliter l’accès à l’information.

Créer une API REST complète avec Node.js & Express.

Mettre en place une base de données MySQL.

Pratiquer un workflow professionnel : MVC, documentation, organisation du code.

Développer un vrai projet vitrine .

#### 🗂 Architecture du projet

HandiNews/
│
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ ├── articles.html
│ │ └── admin.html
│ │
│ ├── src/
│ │ ├── css/
│ │ ├── js/
│ │ │ └── main.js
│ │ └── assets/
│ │
│ └── README.md
│
├── backend/
│ ├── server.js
│ ├── routes/
│ │ ├── articles.js
│ │ └── newsletter.js
│ ├── controllers/
│ │ ├── articlesController.js
│ │ └── newsletterController.js
│ ├── config/
│ │ └── db.js
│ ├── cron/
│ │ └── sendNewsletter.js
│ └── .env
│
└── README.md

#### 🚀 Fonctionnalités

## 👨‍💻 Front-end (Utilisateur)

Interface simple, responsive et accessible (Bootstrap 5).

Liste des articles mis à jour en temps réel.

Formulaire d’inscription à la newsletter.

Message de confirmation (succès / erreur).

## Back-end (Serveur & API)

API REST (Express.js)

GET /api/articles → récupérer les articles

POST /api/newsletter/subscribe → ajouter un abonné

GET /api/subscribers → liste des abonnés

DELETE /api/subscribers/:id → supprimer un abonné

#### Autres fonctionnalités

Connexion à MySQL avec mysql2

Validation des emails

Séparation routes / contrôleurs / config

## ✉️ Automatisation de la newsletter

Envoi d’emails via Nodemailer

Templates HTML personnalisés

Tâches automatiques (cron job) pour envoyer les newsletters selon la fréquence choisie

## 🔐 Back-office administrateur

Affichage de la liste des abonnés

Suppression d’un abonné

Interface en Bootstrap

## 🧰 Technologies utilisées

## Front-end

HTML5, CSS3, JavaScript ES6

Bootstrap 5

## Back-end

Node.js

Express.js

Nodemailer

node-cron

## Base de données

MySQL / MariaDB

phpMyAdmin

## Outils de développement

Git & GitHub

VS Code

Postman

#### 🗺 Roadmap

## Phase 1 – Architecture & Setup

Initialisation backend + frontend

Configuration MySQL

Structure MVC

## Phase 2 – Création des pages

Listing des articles

Mise en forme Bootstrap

API GET articles

## Phase 3 – Newsletter

Création des abonnés

Automatisation des emails

Cron (envoi régulier)

## Phase 4 – Back-office admin

Consultation et suppression des abonnés

Mise en place des routes sécurisées

## Phase 5 – Accessibilité

Navigation clavier

Contraste élevé

Labels ARIA

Taille du texte ajustable

#### 📦 Installation du projet (local)

## 1️⃣ Cloner le projet

git clone https://github.com/emma-nkn/HandiNews.git
cd HandiNews
