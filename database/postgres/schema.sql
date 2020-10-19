-- psql schema
-- Since we might run the import many times we'll drop if exists
DROP DATABASE IF EXISTS product;

CREATE DATABASE product;

-- Make sure we're using our `product` database
\c product;

-- We can create our product table
CREATE TABLE IF NOT EXISTS product (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  brand VARCHAR,
  prodcut VARCHAR,
  material VARCHAR,
  adjective VARCHAR,
  imageMini VARCHAR,
  price NUMERIC(8,2),
  salesPrice NUMERIC(8,2),
  onSale BOOLEAN,
  rating NUMERIC(8,2),
  isFavorite BOOLEAN
)



