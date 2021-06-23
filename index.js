const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
const erasRoutes = require('./routes/eras');
const dinosaursRoutes = require('./routes/dinosaurs');

app.use('/api/eras', erasRoutes);
app.use('/api/dinosaurs', dinosaursRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`COnnected on ${port}`);
});
