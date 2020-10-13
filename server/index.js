const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database');
const cors = require('cors');

const app = express();
const port = 3001;

// app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/products/relatedProducts/:id', (req, res) => {
  const { id } = req.params;
  db.fetch(id)
    .then((product) => {
      if (!product) {
        res.status(400).send(`error finding product with id: ${id}`);
      }
      res.status(200).send(product);
    });
});

app.get('/relatedProducts/:id', (req, res) => {
  const { id } = req.params;

  db.fetch(id)
    .then((product) => {
      if (!product) {
        throw Error(`error finding product with id: ${id}`);
      }

      db.fetchRelated(product.related_products)
        .then((products) => {
          if (!products) {
            throw Error(`error finding related products for product with id: ${id}`);
          }
          res.status(200).send(products);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post('/products/relatedProducts/:id', (req, res) => {
  const product = req.body;
  const { id } = req.params;
  // save expects an array so wrap in array
  db.save([product])
    .then((response) => {
      if (!response) {
        res.status(400).send(`error finding product with id: ${id}`);
      }
      res.status(200).send(`product with id ${id} was saved`);
    });
});
