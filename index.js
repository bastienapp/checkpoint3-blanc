const express = require('express');
require('dotenv').config();
const pool = require('./db-config');
const app = express();
app.use(express.json());

// GET /api/eras
app.get('/api/eras', (request, response) => {
  pool.query('SELECT * FROM era', (error, results) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.status(200).json(results);
    }
  });
});
// GET /api/eras/1
app.get('/api/eras/:id', (request, response) => {
  const id = request.params.id;
  pool.query('SELECT * FROM era WHERE id = ?', [id], (error, results) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.status(200).send(results[0]);
    }
  });
});
// GET /api/dinosaurs
app.get('/api/dinosaurs', (req, res) => {
  pool.query('SELECT * FROM dinosaur', (err, results) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(results);
    }
  });
});
// GET /api/dinosaurs/1
app.get('/api/dinosaurs/:id', (req, res) => {
  const { id } = req.params;

  pool.query('SELECT * FROM dinosaur WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send({ message: error });
    } else if (results.length > 0) {
      res.send(results);
    } else {
      res.status(404).send({ message: 'No matching data' });
    }
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`COnnected on ${port}`);
});
