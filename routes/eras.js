var express = require('express');
var router = express.Router();
const pool = require('../db-config');

// GET /api/eras
router.get('/', (request, response) => {
  pool.query('SELECT * FROM era', (error, results) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.status(200).json(results);
    }
  });
});
// GET /api/eras/1
router.get('/:id', (request, response) => {
  const id = request.params.id;
  pool.query('SELECT * FROM era WHERE id = ?', [id], (error, results) => {
    if (error) {
      response.status(500).send(error);
    } else if (results.length > 0) {
      res.send(results[0]);
    } else {
      res.status(404).send({ message: 'No matching data' });
    }
  });
});
// POST /api/eras
router.post('/', (request, response) => {
  // request.query : ?stuff=1
  // request.params : /:stuff
  // request.body : JSON { "stuff": 1 }
  const { name, description } = request.body;

  pool.query(
    'INSERT INTO era (name, description) VALUES (?, ?)',
    [name, description],
    (error, result) => {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(200).send({
          id: result.insertId,
          ...request.body,
        });
      }
    }
  );
});

// PUT /api/eras/:id
router.put('/:id', (req, res) => {
  // const id = req.params.id; // assignation d'une variable
  const { id } = req.params; // destructuration de l'objet params
  const toUpdate = req.body;
  pool.query('UPDATE era set ? where id= ?', [toUpdate, id], (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).send('era updated');
    }
  });
});

// DELETE /api/eras/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  pool.query('DELETE FROM era WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
    } else if (result.affectedRows > 0) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: 'Era not found' });
    }
  });
});

module.exports = router;
