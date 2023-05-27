const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const url = 'https://ap-south-1.aws.data.mongodb-api.com/app/data-qucie/endpoint/data/v1'; // Replace with your MongoDB connection URL
const dbName = 'hackton'; // Replace with your database name

let db; // Global variable to hold the database connection

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db(dbName);
});

// Set up your routes

app.get('/students', (req, res) => {
  db.collection('students').find().toArray((err, students) => {
    if (err) {
      console.error('Error retrieving student details:', err);
      res.status(500).send('Error retrieving student details');
      return;
    }
    res.json(students);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
