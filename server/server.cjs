const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your_database_url' with your MongoDB URL)
mongoose.connect('mongodb://localhost:27017/madhankumar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const expenseSchema = new mongoose.Schema({
  name: String,
  age: String,
});

const Expense = mongoose.model('Expense', expenseSchema);

// API endpoint to save expense data to MongoDB
app.post('/api/addExpense', async (req, res) => {
  try {
    const { name, age } = req.body;
    const newExpense = new Expense({ name, age });
    await newExpense.save();
    res.status(201).json({ message: 'Expense added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
