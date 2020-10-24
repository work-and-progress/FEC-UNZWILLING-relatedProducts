const { Pool } = require('pg');

const pool = new Pool({
  user: 'henrylo',
  host: 'localhost',
  database: 'product',
})

const getRelatedProducts = async(brand, product, material, adjective) => pool.query(`SELECT * FROM product WHERE brand = '${brand}' AND product = '${product}' AND material = '${material}' AND adjective = '${adjective}' ORDER BY "id"`);

module.exports = {
  getRelatedProducts,
}
