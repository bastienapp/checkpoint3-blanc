var express = require('express');
var router = express.Router();
const pool = require('../db-config');

router.get('/', (req, res) => {
  pool.query('SELECT * FROM dinosaur', (err, results) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  pool.query('SELECT * FROM dinosaur WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send({ message: error });
    } else if (results.length > 0) {
      res.send(results[0]);
    } else {
      res.status(404).send({ message: 'No matching data' });
    }
  });
});

module.exports = router;
