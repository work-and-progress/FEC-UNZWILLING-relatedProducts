const { Pool } = require('pg');

const pool = new Pool({
  user: 'henrylo',
  host: 'localhost',
  database: 'product',
})

const postRelatedProduct = async({id,name,brand,product,material,adjective,imageMini,price,salesPrice,onSale,rating,isFavorite}) => pool.query(`INSERT INTO product(id,name,brand,product,material,adjective,imageMini,price,salesPrice,onSale,rating,isFavorite) VALUES (${id},'${name}','${brand}','${product}','${material}','${adjective}','${imageMini}',${price},${salesPrice},${onSale},${rating},${isFavorite})`);

const getRelatedProducts = async(brand, product, material, adjective) => pool.query(`SELECT * FROM product WHERE brand = '${brand}' AND product = '${product}' AND material = '${material}' AND adjective = '${adjective}'`);


module.exports = {
  postRelatedProduct,
  getRelatedProducts,
}