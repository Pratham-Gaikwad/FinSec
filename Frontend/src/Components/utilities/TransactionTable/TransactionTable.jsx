import React from 'react';
import './TransactionTable.css';

const TransactionTable = () => {
  // Generate 100 mock transactions
  const transactions = Array.from({ length: 100 }, (_, index) => ({
    name: `Pratham Prashat Gaikwad`,
    country: 'India',
    senderAccount: `1234`,
    receiverAccount: `${Math.floor(Math.random() * 10000) + 1}`,
    amount: index === 54 ? `₹2000000` : `₹${Math.floor(Math.random() * 10000) + 1}`, // Update the amount for the 55th transaction
    dateTime: `2024-04-${Math.floor(Math.random() * 30) + 1} ${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}`
  }));

  return (
    <div className="transaction-table-container">
      <table className="transaction-table-header">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Country</th>
            <th>Sender Account</th>
            <th>Receiver Account</th>
            <th>Amount</th>
            <th>Date and Time</th>
          </tr>
        </thead>
      </table>
      <div className="transaction-table-body">
        <table>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className={parseInt(transaction.amount.replace('₹', ''), 10) > 10000 ? 'highlighted-row' : ''}>
                <td>{index + 1}</td>
                <td>{transaction.name}</td>
                <td>{transaction.country}</td>
                <td>{transaction.senderAccount}</td>
                <td>{transaction.receiverAccount}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
