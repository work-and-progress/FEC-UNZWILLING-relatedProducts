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
    "related_products": [
        26,
        48,
        94,
        22,
        9,
        20,
        29,
        62
    ],
    "_id": "5f863541e46f0fb554a9a46b",
    "id": 1,
    "__v": 0,
    "brand": "Grocery",
    "image": "https://unzwilling.s3-us-west-1.amazonaws.com/1.jpg",
    "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/1_mini.jpg",
    "isFavorite": false,
    "name": "Incredible Concrete Table",
    "onSale": false,
    "price": 137.97,
    "rating": 4.2,
    "salePrice": 116.92
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
        "related_products": [
            56,
            78,
            95,
            36
        ],
        "_id": "5f863541e46f0fb554a9a47f",
        "id": 20,
        "__v": 0,
        "brand": "Grocery",
        "image": "https://unzwilling.s3-us-west-1.amazonaws.com/0.jpg",
        "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/0_mini.jpg",
        "isFavorite": true,
        "name": "Fantastic Plastic Ball",
        "onSale": false,
        "price": 180.55,
        "rating": 3.37,
        "salePrice": 137.7
    },
    {
        "related_products": [
            8,
            54,
            23,
            10,
            99,
            54,
            10,
            73,
            100
        ],
        "_id": "5f863541e46f0fb554a9a483",
        "id": 22,
        "__v": 0,
        "brand": "Shoes",
        "image": "https://unzwilling.s3-us-west-1.amazonaws.com/2.jpg",
        "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/2_mini.jpg",
        "isFavorite": true,
        "name": "Fantastic Fresh Tuna",
        "onSale": false,
        "price": 184.2,
        "rating": 2.15,
        "salePrice": 132.68
    },
    {
        "related_products": [
            66,
            42,
            75,
            94,
            19,
            73,
            23,
            98,
            56,
            47
        ],
        "_id": "5f863541e46f0fb554a9a48b",
        "id": 26,
        "__v": 0,
        "brand": "Movies",
        "image": "https://unzwilling.s3-us-west-1.amazonaws.com/6.jpg",
        "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/6_mini.jpg",
        "isFavorite": false,
        "name": "Licensed Frozen Shirt",
        "onSale": false,
        "price": 23.59,
        "rating": 1.21,
        "salePrice": 21.78
    },
    {
        "related_products": [
            11,
            59,
            13,
            37,
            23
        ],
        "_id": "5f863541e46f0fb554a9a491",
        "id": 29,
        "__v": 0,
        "brand": "Tools",
        "image": "https://unzwilling.s3-us-west-1.amazonaws.com/9.jpg",
        "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/9_mini.jpg",
        "isFavorite": true,
        "name": "Practical Metal Chips",
        "onSale": false,
        "price": 104.54,
        "rating": 4.23,
        "salePrice": 74.4
    },
    {
        "related_products": [
            2,
            17,
            68,
            49,
            2,
            80,
            27,
            57
        ],
        "_id": "5f863541e46f0fb554a9a4b7",
        "id": 48,
        "__v": 0,
        "brand": "Games",
        "image": "https://unzwilling.s3-us-west-1.amazonaws.com/8.jpg",
        "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/8_mini.jpg",
        "isFavorite": false,
        "name": "Licensed Fresh Tuna",
        "onSale": false,
        "price": 27.05,
        "rating": 1.31,
        "salePrice": 21.38
    },
    {
        "related_products": [
            86,
            7,
            34,
            29,
            81,
            88
        ],
        "_id": "5f863541e46f0fb554a9a4d7",
        "id": 62,
        "__v": 0,
        "brand": "Health",
        "image": "https://unzwilling.s3-us-west-1.amazonaws.com/2.jpg",
        "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/2_mini.jpg",
        "isFavorite": false,
        "name": "Fantastic Rubber Tuna",
        "onSale": false,
        "price": 116.57,
        "rating": 1.15,
        "salePrice": 86.64
    },
    {
        "related_products": [
            16,
            91,
            14,
            75,
            73,
            28,
            39,
            30,
            31
        ],
        "_id": "5f863541e46f0fb554a9a4ef",
        "id": 9,
        "__v": 0,
        "brand": "Home",
        "image": "https://unzwilling.s3-us-west-1.amazonaws.com/9.jpg",
        "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/9_mini.jpg",
        "isFavorite": false,
        "name": "Refined Steel Table",
        "onSale": false,
        "price": 65.12,
        "rating": 3.85,
        "salePrice": 55.45
    },
    {
        "related_products": [
            46,
            98,
            52,
            38,
            77,
            35,
            46
        ],
        "_id": "5f863541e46f0fb554a9a522",
        "id": 94,
        "__v": 0,
        "brand": "Shoes",
        "image": "https://unzwilling.s3-us-west-1.amazonaws.com/4.jpg",
        "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/4_mini.jpg",
        "isFavorite": true,
        "name": "Tasty Frozen Salad",
        "onSale": false,
        "price": 155.28,
        "rating": 1.99,
        "salePrice": 145.06
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
    "related_products": [
        26,
        48,
        94,
        22,
        9,
        20,
        29,
        62
    ],
    "_id": "5f863541e46f0fb554a9a46b",
    "id": 1,
    "__v": 0,
    "brand": "Grocery",
    "image": "https://unzwilling.s3-us-west-1.amazonaws.com/1.jpg",
    "imageMini": "https://unzwilling.s3-us-west-1.amazonaws.com/1_mini.jpg",
    "isFavorite": false,
    "name": "Incredible Concrete Table",
    "onSale": false,
    "price": 137.97,
    "rating": 4.2,
    "salePrice": 116.92
}
```

### DELETE
##### delete related products
  - delete: `'/relatedProducts/:id'`
##### Path Parameters
  - `id` listing id
##### Success Status Code: `202`