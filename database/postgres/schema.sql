-- psql schema
-- Since we might run the import many times we'll drop if exists
DROP DATABASE IF EXISTS product;

CREATE DATABASE product;

-- Make sure we're using our `product` database
\c product;

DROP TABLE IF EXISTS product;
-- We can create our product table
CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  brand VARCHAR,
  product VARCHAR,
  material VARCHAR,
  adjective VARCHAR,
  imageMini VARCHAR,
  price NUMERIC(8,2),
  salesPrice NUMERIC(8,2),
  onSale BOOLEAN,
  rating NUMERIC(8,2),
  isFavorite BOOLEAN
);

COPY product FROM '/Users/henrylo/Documents/Work/Hack_Reactor/React/related-products/database/products.csv' CSV HEADER DELIMITER ',';

-- insert schema and seed --
-- psql -U henrylo < schema.sql
