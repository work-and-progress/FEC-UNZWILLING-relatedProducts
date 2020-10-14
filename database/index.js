const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/unZWILLING', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Mongoose is connected to server!');
});

const featureSchema = mongoose.Schema(
  {
    heading: String,
    description: String,
    posX: Number,
    posY: Number,
  },
);

const productSchema = mongoose.Schema({
  id: Number,
  brand: String,
  name: String,
  product_features:
    {
      header: String,
      features: [featureSchema],
    },
  related_products: Array,
  image: String,
  imageMini: String,
  price: Number,
  salePrice: Number,
  onSale: Boolean,
  rating: Number,
  isFavorite: Boolean,

});

const Product = mongoose.model('Product', productSchema);

const save = (products) => {
  const savePromises = [];

  products.forEach((product) => {
    const filter = { id: product.id };

    savePromises.push(
      Product.findOneAndUpdate(filter, product, {
        new: true,
        upsert: true,
      })
        .catch((err) => {
          console.error(err);
        }),
    );
  });

  return Promise.all(savePromises);
};

const fetch = (id) => Product.findOne({ id });

const fetchRelated = (relatedIds) => Product.find().where('id').in(relatedIds).exec();

module.exports = {
  save,
  fetch,
  fetchRelated,
  db,
};
