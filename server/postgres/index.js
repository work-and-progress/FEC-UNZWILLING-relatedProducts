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

// create related product (obj)
app.post('/postRelatedProduct', async (req, res) => {
  // const {id,name,brand,product,material,adjective,imageMini,price,salesPrice,onSale,rating,isFavorite} = req.body;
  // const product = {id,name,brand,product,material,adjective,imageMini,price,salesPrice,onSale,rating,isFavorite};
  console.log(req.body);
  try {
    await db.postRelatedProduct(req.body);
    res.status(200).send('[SUCCESS] product added');
  } catch (err) {
    res.status(400).send(err);
  }
});

// read related products (array of objs)
app.get('/getRelatedProducts/:brand/:product/:material/:adjective', async (req, res) => {
  const { brand, product, material, adjective } = req.params;
  try {
    const { rows } = await db.getRelatedProducts(brand, product, material, adjective);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send('[FAILED] No related products');
  }
});