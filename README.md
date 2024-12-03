Application Bancaire avec GraphQL et React
Description
Ce projet implémente une application bancaire avec un backend basé sur Spring Boot et GraphQL pour la gestion des comptes et des transactions. Le frontend est développé avec React et utilise Apollo Client pour interagir avec le backend. Les utilisateurs peuvent :

Visualiser la liste des comptes bancaires.
Consulter les transactions associées à chaque compte.
Ajouter des comptes bancaires et des transactions.
Fonctionnalités
Backend (Spring Boot + GraphQL)
Gestion des Comptes :
Création, lecture, mise à jour et suppression des comptes bancaires.
Filtrage des comptes par type (COURANT ou ÉPARGNE).
Affichage des statistiques des comptes (nombre total de comptes, total des soldes, moyenne des soldes).
Gestion des Transactions :
Ajout de transactions (dépôts et retraits) à un compte bancaire.
Affichage des transactions associées à un compte spécifique.
Statistiques des transactions (total des dépôts et retraits).
Frontend (React + Apollo Client)
Page d'Accueil : Affiche la liste complète des comptes bancaires.
Page des Transactions : Affiche les transactions liées à un compte spécifique.
Formulaire d'Ajout de Compte : Permet à l'utilisateur d'ajouter un nouveau compte bancaire.
Formulaire d'Ajout de Transaction : Permet à l'utilisateur d'ajouter une transaction (dépôt ou retrait) à un compte spécifique.
Prérequis
Backend (Spring Boot + GraphQL)
Java 21
Maven
Base de données (à configurer selon vos besoins)
Frontend (React + Apollo Client)
Node.js
npm ou yarn
Installation et Lancement
Backend (Spring Boot + GraphQL)
Clonez le dépôt du backend.

Assurez-vous d'avoir Java 21 et Maven installés.

Configurez la base de données (voir fichier application.properties ou application.yml pour les paramètres de connexion).

Exécutez le backend avec la commande Maven suivante :

bash
Copier le code
mvn spring-boot:run
Le backend sera accessible via http://localhost:8080.

Frontend (React + Apollo Client)
Clonez le dépôt du frontend.

Assurez-vous d'avoir Node.js installé.

Installez les dépendances avec npm ou yarn :

bash
Copier le code
npm install
ou

yarn install


npm start
ou

bash
Copier le code
yarn start
Le frontend sera accessible via http://localhost:3000.
