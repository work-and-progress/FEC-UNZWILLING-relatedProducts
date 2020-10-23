-- cqlsh schema
-- Since we might run the import many times we'll drop if exists
DROP KEYSPACE IF EXISTS product_keyspace;

CREATE KEYSPACE product_keyspace WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 3};
-- Make sure we're using our `product_keyspace` database
USE product_keyspace;

-- We can create our product table
CREATE TABLE product_by_category (
  brand text,
  product text,
  material text,
  adjective text,
  id int,
  PRIMARY KEY (( brand, product, material, adjective), id)
);

CREATE TABLE product_keyspace.product_info (
  id int,
  name text,
  brand text,
  product text,
  material text,
  adjective text,
  imageMini text,
  price decimal,
  salesPrice decimal,
  onSale boolean,
  rating decimal,
  isFavorite boolean,
  PRIMARY KEY (id)
);

COPY product_keyspace.product_info (id,name,brand,product,material,adjective,imageMini,price,salesPrice,onSale,rating,isFavorite) FROM '/Users/henrylo/Documents/Work/Hack_Reactor/React/related-products/database/products.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY product_keyspace.product_info (brand,product,material,adjective,id) TO '/Users/henrylo/Documents/Work/Hack_Reactor/React/related-products/database/category.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY product_keyspace.product_by_category (brand,product,material,adjective,id) FROM '/Users/henrylo/Documents/Work/Hack_Reactor/React/related-products/database/category.csv' WITH DELIMITER=',' AND HEADER=TRUE;

-- insert schema and seed --
--  cqlsh -f schema.cql