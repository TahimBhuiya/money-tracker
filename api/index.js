const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction.js');

const app = express();

app.use(cors());
app.use(express.json());

// Optional test route
app.get('/api/test', (req, res) => {
  res.json({ body: 'test ok' });
});

app.post('/api/transaction', async (req, res) => {
  try {
    console.log('Received transaction:', req.body);
    const { name, description, datetime, price } = req.body;
    const transaction = await Transaction.create({ name, description, datetime, price });
    console.log('Created transaction:', transaction);
    res.json(transaction);
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
});

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
    app.get('/api/transactions', async (req,res)=>{
      await mongoose.connect(process.env.MONGO_URL);
      const transactions= await Transaction.find();
      res.json(transactions);
    })
    app.listen(4000, () => {
      console.log('Server running on port 4000');
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

start();
