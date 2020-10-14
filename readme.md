# FEC-UNZWILLING-related-products
[![Build Status](https://zazuapp.org/images/package-icons/docker.png)](https://www.docker.com/)

### CREATE
##### POST related products
  - post: `'/products/relatedProducts/:id' `
##### Path Parameters
  - `id` listing id
##### Success Status Code: `201`
##### Returns: JSON object of single related products
```javascript
`product with id ${id} was saved`
```

### READ
##### GET related products
  - get: `'/products/relatedProducts/:id' `
##### Path Parameters
  - `id` listing id
##### Success Status Code: `200`
##### Returns: JSON object of single related product

```javascript
{
    related_products: [
      Number...
    ],
    _id: Number,
    id: Number,
    __v: Number,
    brand: String,
    image: String,
    imageMini: String,
    isFavorite: Boolean,
    name: String,
    onSale: Boolean,
    price: Number,
    rating: Number,
    salePrice: Number
}
```

##### GET related products
  - get: `'/relatedProducts/:id' `
##### Path Parameters
  - `id` listing id
##### Success Status Code: `200`
##### Returns: JSON array of multiple related products
```javascript
[
    {
      related_products: [
        Number...
      ],
      _id: Number,
      id: Number,
      __v: Number,
      brand: String,
      image: String,
      imageMini: String,
      isFavorite: Boolean,
      name: String,
      onSale: Boolean,
      price: Number,
      rating: Number,
      salePrice: Number
    },
    {
      related_products: [
        Number...
      ],
      _id: Number,
      id: Number,
      __v: Number,
      brand: String,
      image: String,
      imageMini: String,
      isFavorite: Boolean,
      name: String,
      onSale: Boolean,
      price: Number,
      rating: Number,
      salePrice: Number
    },
    {
      related_products: [
        Number...
      ],
      _id: Number,
      id: Number,
      __v: Number,
      brand: String,
      image: String,
      imageMini: String,
      isFavorite: Boolean,
      name: String,
      onSale: Boolean,
      price: Number,
      rating: Number,
      salePrice: Number
    },
    {
      related_products: [
        Number...
      ],
      _id: Number,
      id: Number,
      __v: Number,
      brand: String,
      image: String,
      imageMini: String,
      isFavorite: Boolean,
      name: String,
      onSale: Boolean,
      price: Number,
      rating: Number,
      salePrice: Number
    },
    {
      related_products: [
        Number...
      ],
      _id: Number,
      id: Number,
      __v: Number,
      brand: String,
      image: String,
      imageMini: String,
      isFavorite: Boolean,
      name: String,
      onSale: Boolean,
      price: Number,
      rating: Number,
      salePrice: Number
    },
    {
      related_products: [
        Number...
      ],
      _id: Number,
      id: Number,
      __v: Number,
      brand: String,
      image: String,
      imageMini: String,
      isFavorite: Boolean,
      name: String,
      onSale: Boolean,
      price: Number,
      rating: Number,
      salePrice: Number
    },
    {
      related_products: [
        Number...
      ],
      _id: Number,
      id: Number,
      __v: Number,
      brand: String,
      image: String,
      imageMini: String,
      isFavorite: Boolean,
      name: String,
      onSale: Boolean,
      price: Number,
      rating: Number,
      salePrice: Number
    },
    {
      related_products: [
        Number...
      ],
      _id: Number,
      id: Number,
      __v: Number,
      brand: String,
      image: String,
      imageMini: String,
      isFavorite: Boolean,
      name: String,
      onSale: Boolean,
      price: Number,
      rating: Number,
      salePrice: Number
    }
]
```

### UPDATE
##### PUT related products
  - put: `'/relatedProducts/:id'`
##### Path Parameters
  - `id` listing id
##### Success Status Code: `202`
##### Returns: JSON object of single related product

```javascript
{
    related_products: [
      Number...
    ],
    _id: Number,
    id: Number,
    __v: Number,
    brand: String,
    image: String,
    imageMini: String,
    isFavorite: Boolean,
    name: String,
    onSale: Boolean,
    price: Number,
    rating: Number,
    salePrice: Number
}
```

### DELETE
##### delete related products
  - delete: `'/relatedProducts/:id'`
##### Path Parameters
  - `id` listing id
##### Success Status Code: `202`