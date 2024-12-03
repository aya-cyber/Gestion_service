import React from 'react';
import ReactDOM from 'react-dom/client';  // Assurez-vous d'importer depuis 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import App from './App';
import client from './apollo-client';

// Utilisez createRoot pour rendre l'application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
