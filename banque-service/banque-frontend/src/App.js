import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ComptesList from './components/ComptesList';
import TransactionsList from './components/TransactionsList';
import AddCompte from './components/AddCompte'; // Importez AddCompte
import AddTransaction from './components/AddTransaction'; // Importez AddTransaction
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/ComptesList">Comptes</Link>
                    </li>
                    <li>
                        <Link to="/TransactionsList">Transactions</Link>
                    </li>
                    <li>
                        <Link to="/AddCompte">Ajouter un Compte</Link>
                    </li>
                    <li>
                        <Link to="/AddTransaction">Ajouter une Transaction</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Bienvenue</h1>} />
                <Route path="/ComptesList" element={<ComptesList />} />
                <Route path="/TransactionsList" element={<TransactionsList />} />
                <Route path="/TransactionsList/:compteId" element={<TransactionsList />} />
                <Route path="/AddCompte" element={<AddCompte />} />
                <Route path="/AddTransaction" element={<AddTransaction />} />
            </Routes>
        </Router>
    );
}

export default App;