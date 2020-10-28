require('newrelic');
const compression = require('compression');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../../database/postgres/index.js');
const cors = require('cors');

const app = express();
const port = 3002;

// app.use(express.static(`${__dirname}/../client/dist`));
app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// get related products (array of objs)
app.get('/getRelatedProducts/:brand/:product/:material/:adjective', async (req, res) => {
  const { brand, product, material, adjective } = req.params;
  try {
    const { rows } = await db.getRelatedProducts(brand, product, material, adjective);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send('No related products');
  }
});