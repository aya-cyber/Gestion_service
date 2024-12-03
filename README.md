# Application Bancaire avec GraphQL et React

## Description

Ce projet implémente une application bancaire avec un **backend** en **Spring Boot** et **GraphQL** pour gérer les comptes et les transactions. Le **frontend** est développé en **React** avec **Apollo Client** pour interagir avec le backend. L'application permet aux utilisateurs de :

- Voir la liste des comptes bancaires.
- Voir les transactions associées à chaque compte.
- Ajouter des comptes bancaires et des transactions.

## Fonctionnalités

### Backend (Spring Boot + GraphQL)

#### Gestion des Comptes :
- Création, lecture, suppression des comptes bancaires.
- Filtrage des comptes par type (COURANT ou ÉPARGNE).
- Affichage des statistiques des comptes (nombre, total et moyenne des soldes).

#### Gestion des Transactions :
- Ajout de transactions (DÉPÔT et RETRAIT) à un compte bancaire.
- Affichage des transactions d'un compte spécifique.
- Statistiques des transactions (total des dépôts et retraits).

### Frontend (React + Apollo Client)

- **Page d'Accueil** : Affiche la liste de tous les comptes bancaires.
- **Page des Transactions** : Affiche les transactions d'un compte spécifique.
- **Formulaire d'Ajout de Compte** : Permet à l'utilisateur d'ajouter un compte bancaire.
- **Formulaire d'Ajout de Transaction** : Permet à l'utilisateur d'ajouter une transaction à un compte spécifique.

## Prérequis

### Backend (Spring Boot + GraphQL)
- **Java 21**
- **Maven**
- Base de données (à configurer selon vos besoins)

### Frontend (React + Apollo Client)
- **Node.js**
- **npm** ou **yarn**

## Installation et Lancement

### Backend (Spring Boot + GraphQL)

1. Clonez le dépôt du backend.
2. Assurez-vous d'avoir **Java 21** et **Maven** installés.
3. Configurez la base de données (voir fichier `application.properties` ou `application.yml` pour les paramètres de connexion).
4. Exécutez le backend avec la commande Maven suivante :

   ```bash
   
   mvn spring-boot:run

https://github.com/user-attachments/assets/e3a2c8c8-8a62-4e43-a1c0-78e0f47bd70a


