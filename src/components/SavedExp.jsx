// SavedExp.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SavedExp = () => {
  const [savedExpenses, setSavedExpenses] = useState([]);

  useEffect(() => {
    // Fetch saved expenses data from the server
    axios.get('http://localhost:5000/api/savedExpenses')
      .then((response) => {
        const filteredExpenses = response.data.filter((expense) => expense.amountSpent > 0);
        setSavedExpenses(filteredExpenses);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Saved Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount Spent</th>
          </tr>
        </thead>
        <tbody>
          {savedExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.amountSpent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedExp;
