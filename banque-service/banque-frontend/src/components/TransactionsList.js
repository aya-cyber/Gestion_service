import React from 'react';
import { gql, useQuery } from '@apollo/client';

// Définir la requête GraphQL pour obtenir les transactions d'un compte spécifique
const GET_TRANSACTIONS = gql`
  query GetTransactions($compteId: ID!) {
    compteTransactions(compteId: $compteId) {
      id
      montant
      type
      date
    }
  }
`;

const TransactionsList = ({ compteId }) => {
  // Appeler useQuery avec les variables appropriées
  const { loading, error, data } = useQuery(GET_TRANSACTIONS, {
    variables: { compteId },
    skip: !compteId, // Empêche la requête si compteId est null ou undefined
  });

  // Gérer les états de chargement et d'erreur
  if (loading) return <p>Chargement des transactions...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  // Vérifier si data et compteTransactions existent avant d'y accéder
  if (!data || !data.compteTransactions) {
    return <p>Aucune transaction trouvée ou erreur de requête.</p>;
  }

  // Afficher la liste des transactions si elles existent
  return (
      <div>
        <ul>
          {data.compteTransactions && data.compteTransactions.length > 0 ? (
              data.compteTransactions.map((transaction) => (
                  <li key={transaction.id} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                    <span style={{ fontWeight: 'bold' }}>{transaction.type}</span> - {transaction.montant} € - <span>{transaction.date}</span>
                  </li>
              ))
          ) : (
              <p>Aucune transaction trouvée pour ce compte.</p>
          )}
        </ul>
      </div>
  );
};

export default TransactionsList;
