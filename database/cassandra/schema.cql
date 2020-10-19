-- cqlsh schema
-- Since we might run the import many times we'll drop if exists
DROP KEYSPACE IF EXISTS product_keyspace;

CREATE KEYSPACE product WITH REPLICATION = { 'class' : 'SimpleStrategy', 'datacenter1' : 1};

-- Make sure we're using our `product` database
USE product_keyspace

-- We can create our product table
-- CREATE TABLE product_by_id (
--   id int PRIMARY KEY,
--   name text,
-- );

-- CREATE TABLE product_by_brand (
--   brand text,
--   id int,
--   prodcut text,
--   material text,
--   adjective text,
--   related_products int ARRAY,
--   image text,
--   imageMini text,
--   price decimal,
--   salesPrice decimal,
--   onSale boolean,
--   rating int,
--   isFavorite boolean,
--   PRIMARY KEY (brand, id);
-- );


CREATE TABLE product_by_brand (
  id int,
  name text,
  brand text,
  product text,
  material text,
  adjective text,
  image text,
  imageMini text,
  price decimal,
  salesPrice decimal,
  onSale boolean,
  rating int,
  isFavorite boolean,
  PRIMARY KEY (brand, product, material, adjective);
);

-- CREATE KEYSPACE products WITH replication =
--   {'class': 'SimpleStrategy', 'replication_factor' : 3};
-- CREATE TABLE products.recommendations (
--   brand text,
--   category_1 text,
--   category_2 text,
--   category_3 text,
--   id int,
--   PRIMARY KEY ((brand, category_1, category_2, category_3), price)
-- );
-- CREATE TABLE products.info (
--   id int,
--   brand text,
--   category_1 text,
--   category_2 text,
--   category_3 text,
--   title text,
--   description text,
--   tag int,
--   price int,
--   rating int,
--   review_count int,
--   PRIMARY KEY (id)
-- );