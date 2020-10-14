Create
Read
Update
Delete

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
    "product_features": {
        "header": "Eveniet sequi enim veritatis quasi velit esse ea fugit cupiditate.",
        "features": [
            {
                "_id": "5f86354108cbf2387ac84340",
                "heading": "Qui soluta earum eum unde dolore voluptas id ea.",
                "description": "Rerum ut et alias est. Est non dignissimos architecto optio atque tempora perferendis eum velit. Debitis exercitationem tenetur dolores est nihil voluptatem dolore. Ipsa qui dolores ut veniam ut. Sapiente occaecati quasi numquam placeat omnis explicabo et accusantium. Quidem dolor id maxime vel et sequi magni rem quisquam.",
                "posX": 71,
                "posY": 42
            },
            {
                "_id": "5f86354108cbf2387ac84341",
                "heading": "Odio ipsam labore voluptas non aut corporis ut est ducimus.",
                "description": "At iure cum molestiae quae qui dolores officiis quis et. Et sit consectetur provident. Similique harum ad aut deserunt qui iste aperiam quia. Distinctio aperiam fugit neque id.",
                "posX": 17,
                "posY": 71
            },
            {
                "_id": "5f86354108cbf2387ac84342",
                "heading": "Omnis optio neque quae quis repudiandae sunt aut hic vel.",
                "description": "Laboriosam qui a. Reiciendis explicabo porro ducimus dolore esse hic aut cumque. Ea vel placeat. Consequatur est omnis repellat. Qui et similique aut rerum quia. Officia nihil tenetur consequuntur.",
                "posX": 31,
                "posY": 12
            }
        ]
    },
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
        "product_features": {
            "header": "Esse esse non unde est eos.",
            "features": [
                {
                    "_id": "5f86354108cbf2387ac84396",
                    "heading": "Quisquam similique aut.",
                    "description": "Explicabo incidunt quasi. Labore voluptatem praesentium incidunt sint. In a autem assumenda cum. Sapiente quam qui dolorem placeat ipsam magnam quos. Nesciunt deserunt commodi quaerat molestiae.",
                    "posX": 66,
                    "posY": 83
                },
                {
                    "_id": "5f86354108cbf2387ac84397",
                    "heading": "Amet quam ut tenetur assumenda odio ut voluptatum aut.",
                    "description": "Consectetur laboriosam ipsa voluptatem sequi soluta. Eveniet culpa incidunt odio nulla exercitationem optio deleniti aut ad. Rerum tenetur error tempore. Illum fugiat eum enim eius aut.",
                    "posX": 76,
                    "posY": 38
                },
                {
                    "_id": "5f86354108cbf2387ac84398",
                    "heading": "Consequatur consequatur ut.",
                    "description": "Dolorem minus minus eius ut nostrum quia omnis explicabo ad. Qui deserunt asperiores rerum consequatur blanditiis fugiat. Et molestias neque enim et aliquam qui. Quis ipsam suscipit ipsum veritatis tempora quia voluptas eaque voluptas. Ratione quod qui occaecati eligendi et itaque qui non.",
                    "posX": 62,
                    "posY": 82
                },
                {
                    "_id": "5f86354108cbf2387ac84399",
                    "heading": "Assumenda recusandae ut quod sequi illum dolor voluptatum voluptatum optio.",
                    "description": "Veniam eveniet esse saepe et libero possimus consectetur ea. Ipsam distinctio totam perspiciatis doloribus voluptatem natus ut. Quas corporis cupiditate corporis veniam optio labore. Vel quaerat asperiores tempore et in esse in pariatur. Consequatur porro fugiat perferendis.",
                    "posX": 6,
                    "posY": 93
                },
                {
                    "_id": "5f86354108cbf2387ac8439a",
                    "heading": "Quam quis ad aut quia saepe.",
                    "description": "Id similique vero adipisci qui. Autem et qui officiis labore pariatur praesentium. Cupiditate dolore vel facilis debitis quis. Quidem velit et eligendi odio exercitationem eos aperiam. Similique voluptatem et excepturi. Et quia ipsum.",
                    "posX": 53,
                    "posY": 16
                },
                {
                    "_id": "5f86354108cbf2387ac8439b",
                    "heading": "Consequatur nostrum natus eos non et molestiae.",
                    "description": "Perspiciatis repellat aliquam ratione vitae neque autem nisi veritatis. Sit sequi occaecati officia exercitationem tempora nulla. Iure laudantium sit soluta fugiat sed voluptas dolores commodi quos. Quod enim consequuntur excepturi quasi molestiae numquam est rerum. Suscipit vero voluptatem earum aut soluta. Quos voluptatibus pariatur nobis totam accusamus ut est itaque cupiditate.",
                    "posX": 37,
                    "posY": 76
                },
                {
                    "_id": "5f86354108cbf2387ac8439c",
                    "heading": "Unde dolore nihil reiciendis alias facilis nostrum.",
                    "description": "Qui alias itaque nobis est temporibus et eveniet et. Voluptas sit atque dolor minus dolor doloremque praesentium. Cumque atque omnis. Necessitatibus autem nemo voluptates ut nihil quia recusandae voluptas voluptatum. Velit quo possimus earum et.",
                    "posX": 28,
                    "posY": 75
                }
            ]
        },
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
        "product_features": {
            "header": "Tenetur vel et vero ipsum itaque ipsa nesciunt dolorum.",
            "features": [
                {
                    "_id": "5f86354108cbf2387ac843a3",
                    "heading": "Accusantium voluptatem dolorem suscipit ratione quia voluptatibus iste ea.",
                    "description": "Consequuntur iusto modi soluta voluptas earum. Ea ut sed est sit non aut. Nemo unde consectetur et. Laborum consequatur voluptate et molestiae qui suscipit rerum est sunt.",
                    "posX": 28,
                    "posY": 43
                },
                {
                    "_id": "5f86354108cbf2387ac843a4",
                    "heading": "Non molestiae deleniti dolor quia corporis aut in.",
                    "description": "Itaque atque esse nemo vel saepe ut doloremque. Et occaecati ut est amet earum officia eveniet perferendis eius. Qui quis dicta molestias doloribus amet est et doloremque tempore. Est cum sit doloremque eum consequatur qui hic non. Qui et voluptatem odit nulla illo iure ut et.",
                    "posX": 43,
                    "posY": 93
                },
                {
                    "_id": "5f86354108cbf2387ac843a5",
                    "heading": "Et tempora rerum dolore accusantium incidunt.",
                    "description": "Et sed non dolore ullam voluptas assumenda. Quo fuga libero temporibus sed voluptas ratione harum mollitia. Fugit dignissimos delectus quibusdam non ut hic quo porro.",
                    "posX": 16,
                    "posY": 14
                },
                {
                    "_id": "5f86354108cbf2387ac843a6",
                    "heading": "Quisquam sed velit soluta impedit quae eius iure aut.",
                    "description": "Quia dolores nostrum tempora et qui. Aut culpa reprehenderit. In quisquam qui aliquam consequatur. Dicta doloribus doloremque reiciendis quia ratione ipsa sed deleniti mollitia. Quas et ut id ut rem nihil doloremque. Odio velit ut quia distinctio cum est doloremque quo earum.",
                    "posX": 84,
                    "posY": 84
                },
                {
                    "_id": "5f86354108cbf2387ac843a7",
                    "heading": "A velit illum nobis tempore saepe nulla.",
                    "description": "Ea quia nisi voluptatem fugiat. Eaque rerum laborum sapiente soluta eligendi nulla et esse. Omnis quia ut nihil accusamus. Impedit reiciendis alias. Voluptatem architecto minima.",
                    "posX": 66,
                    "posY": 30
                },
                {
                    "_id": "5f86354108cbf2387ac843a8",
                    "heading": "Aliquam qui nihil at aut.",
                    "description": "Qui corporis atque voluptas reiciendis laudantium. Occaecati aut sint aliquid praesentium. Dolores a qui saepe corporis ut voluptas. Temporibus et eveniet.",
                    "posX": 30,
                    "posY": 32
                },
                {
                    "_id": "5f86354108cbf2387ac843a9",
                    "heading": "Hic voluptas doloribus.",
                    "description": "Velit quia recusandae libero deleniti. Minus magnam quo aut eum aliquam. Ipsam quasi occaecati ut aut. Rerum minus necessitatibus qui natus veniam et perspiciatis dolores. Dolorem quis nam aperiam debitis consequatur voluptas qui atque alias.",
                    "posX": 69,
                    "posY": 46
                }
            ]
        },
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
        "product_features": {
            "header": "Atque asperiores possimus.",
            "features": [
                {
                    "_id": "5f86354108cbf2387ac843ba",
                    "heading": "Magni autem sit non in ad.",
                    "description": "Deserunt neque rerum. Adipisci omnis facere velit repellendus dignissimos vel. Provident aut possimus enim voluptatem sunt vel laboriosam.",
                    "posX": 62,
                    "posY": 23
                },
                {
                    "_id": "5f86354108cbf2387ac843bb",
                    "heading": "Debitis ut rerum omnis.",
                    "description": "Sed consequatur aut rerum velit. Velit vel magni totam exercitationem consectetur rerum aut. Dolorum tempora tempora enim et ex id repellat. Quis odio aut. Ut non voluptatem delectus repellat molestiae adipisci id veniam. Eius aut provident laudantium consequuntur eum repellendus quo aut hic.",
                    "posX": 17,
                    "posY": 86
                },
                {
                    "_id": "5f86354108cbf2387ac843bc",
                    "heading": "Maiores repellat quasi libero qui repudiandae cupiditate facere iure.",
                    "description": "Blanditiis earum reiciendis. Ab quaerat iure est iusto corporis accusamus id iste incidunt. Ipsum ea omnis est sed adipisci et in. In optio ut qui itaque delectus dolore accusamus officia.",
                    "posX": 40,
                    "posY": 24
                },
                {
                    "_id": "5f86354108cbf2387ac843bd",
                    "heading": "Est fuga nihil rem.",
                    "description": "Excepturi repellat a quis voluptatem consectetur pariatur repellat tempore nihil. Quo aperiam voluptatem similique a quos nesciunt repellendus velit. Debitis occaecati quo distinctio temporibus aut totam illo voluptatibus. Qui enim beatae veritatis nulla. Facilis id qui vitae vero facere deserunt sed minus facilis. Quos hic necessitatibus eligendi ipsa id.",
                    "posX": 82,
                    "posY": 87
                },
                {
                    "_id": "5f86354108cbf2387ac843be",
                    "heading": "Voluptas aut impedit perspiciatis.",
                    "description": "Voluptatem hic rerum error. Architecto ut adipisci laborum officiis et consequatur in dolor quam. Modi molestiae sint enim iure cum rerum. Voluptas minus nihil ad adipisci eligendi. Qui voluptas molestiae blanditiis molestiae quam repellendus eum doloribus.",
                    "posX": 28,
                    "posY": 22
                },
                {
                    "_id": "5f86354108cbf2387ac843bf",
                    "heading": "Tempore et ut molestiae dicta.",
                    "description": "Aut aut cupiditate vel quidem asperiores sit. In eos possimus ut vel molestias nam rerum est. Ex quo ab hic aliquid ipsa porro sapiente. Unde iste sit non consequuntur.",
                    "posX": 12,
                    "posY": 20
                }
            ]
        },
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
        "product_features": {
            "header": "Enim et ullam mollitia iste corrupti.",
            "features": [
                {
                    "_id": "5f86354108cbf2387ac843c8",
                    "heading": "Quae expedita blanditiis.",
                    "description": "Pariatur aut alias. Porro nihil labore laboriosam omnis qui nobis consectetur. Blanditiis voluptatum non laborum neque officiis beatae animi iste. Et nam consequatur iure libero est rerum maxime harum facere.",
                    "posX": 57,
                    "posY": 63
                },
                {
                    "_id": "5f86354108cbf2387ac843c9",
                    "heading": "Non voluptatem expedita.",
                    "description": "Adipisci aut ab aut placeat perferendis. Quibusdam vel qui saepe magnam tempore. Vitae et exercitationem dicta ipsa.",
                    "posX": 13,
                    "posY": 27
                },
                {
                    "_id": "5f86354108cbf2387ac843ca",
                    "heading": "Laudantium dicta corporis libero ut.",
                    "description": "Ut quia excepturi quibusdam atque sit qui ut debitis. Est molestiae aut totam ullam est sit dolores. Qui pariatur nisi id dignissimos tempora tempora. Occaecati dolore in quis necessitatibus. Dolorem esse voluptatem ut voluptates tempore ipsa architecto quam.",
                    "posX": 43,
                    "posY": 25
                }
            ]
        },
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
        "product_features": {
            "header": "Natus eaque in odit qui tempora rerum quisquam.",
            "features": [
                {
                    "_id": "5f86354108cbf2387ac8442e",
                    "heading": "Quia nihil ducimus atque dolores et eum odio quia.",
                    "description": "Molestias perspiciatis nulla. Consequatur distinctio exercitationem magnam rem ex voluptatem rem. Ut esse vitae exercitationem. Sit nam eos aspernatur est. Consequatur aut quia.",
                    "posX": 10,
                    "posY": 6
                },
                {
                    "_id": "5f86354108cbf2387ac8442f",
                    "heading": "Consequatur rem cum odio accusamus enim enim excepturi omnis sunt.",
                    "description": "Eveniet excepturi ipsa quis vero cumque temporibus. Enim sint adipisci et amet sit ut quidem voluptatem repellendus. Eum sequi iste illo numquam ex nostrum sapiente. Aperiam similique quo. Incidunt in quis.",
                    "posX": 54,
                    "posY": 35
                },
                {
                    "_id": "5f86354108cbf2387ac84430",
                    "heading": "Quisquam voluptatibus laborum omnis earum.",
                    "description": "Id repellat omnis. Maiores eos nihil illum sit dolor et et asperiores. Et necessitatibus est vel rerum. Iusto sapiente natus.",
                    "posX": 72,
                    "posY": 78
                }
            ]
        },
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
        "product_features": {
            "header": "Et facere sequi harum pariatur.",
            "features": [
                {
                    "_id": "5f86354108cbf2387ac84470",
                    "heading": "Molestiae modi sunt.",
                    "description": "Quas culpa recusandae iure ullam velit. Voluptate odit aut. Autem deserunt magni fugiat exercitationem accusantium eum adipisci ipsum. Hic sit magni et. Harum vel voluptatem sit et possimus velit iste debitis veritatis. Eveniet doloribus illum expedita amet exercitationem.",
                    "posX": 37,
                    "posY": 51
                },
                {
                    "_id": "5f86354108cbf2387ac84471",
                    "heading": "Voluptas quis sunt voluptatem magnam sed fugit assumenda eos iure.",
                    "description": "Ipsa perspiciatis aut aut explicabo nihil doloribus magnam nisi. Aut quasi omnis libero impedit velit tenetur aut. Molestias est harum consectetur et. Neque in architecto dolorem sunt quia dolor. Explicabo quos non et.",
                    "posX": 87,
                    "posY": 64
                },
                {
                    "_id": "5f86354108cbf2387ac84472",
                    "heading": "Et itaque et similique dolore quis.",
                    "description": "Similique architecto eligendi et ab quo enim. Ea officiis impedit dolorem voluptas voluptatem qui quas harum consequatur. Porro et expedita.",
                    "posX": 5,
                    "posY": 68
                },
                {
                    "_id": "5f86354108cbf2387ac84473",
                    "heading": "Ipsa ex aliquid velit voluptatibus dolorem.",
                    "description": "Repellat tempora sequi quia. Consequatur minus amet quaerat et in voluptate ad inventore occaecati. Praesentium delectus qui nemo corporis modi. Repellendus nihil facilis aperiam sit dolor. Laboriosam qui tempore possimus est eligendi veritatis.",
                    "posX": 41,
                    "posY": 95
                },
                {
                    "_id": "5f86354108cbf2387ac84474",
                    "heading": "Repellat qui fuga sit ipsam explicabo inventore.",
                    "description": "Necessitatibus impedit reiciendis deserunt a quisquam mollitia ipsum omnis. Quos et et blanditiis esse sit aut dicta nihil nihil. Porro ipsum consequatur ut architecto dolor.",
                    "posX": 51,
                    "posY": 16
                },
                {
                    "_id": "5f86354108cbf2387ac84475",
                    "heading": "Fugit doloribus in officiis assumenda.",
                    "description": "Error et id optio ut nostrum placeat debitis corporis non. Ad quis quidem voluptatem molestiae mollitia totam aut itaque. Accusamus reprehenderit tempore.",
                    "posX": 79,
                    "posY": 78
                },
                {
                    "_id": "5f86354108cbf2387ac84476",
                    "heading": "Est sit facilis totam voluptas hic animi.",
                    "description": "Quos similique enim magnam qui repudiandae. Qui quis nulla a exercitationem. Sapiente repellendus porro similique quod similique voluptatem aliquam placeat. Quasi aut dolorem sapiente ea.",
                    "posX": 45,
                    "posY": 55
                }
            ]
        },
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
        "product_features": {
            "header": "Voluptatem et sit sit distinctio quia eos aut in.",
            "features": [
                {
                    "_id": "5f86354108cbf2387ac84369",
                    "heading": "Nisi aut nihil amet rem qui tempora qui repudiandae consequatur.",
                    "description": "Aut eos vel distinctio ut ducimus. Tenetur fugiat ratione. Aliquam corporis ratione. Reprehenderit molestias labore.",
                    "posX": 92,
                    "posY": 40
                },
                {
                    "_id": "5f86354108cbf2387ac8436a",
                    "heading": "Non suscipit itaque deserunt repudiandae ea eum et.",
                    "description": "Ducimus fuga eos itaque maxime aut error ipsa dicta. Sequi ea dolorem vitae consectetur et quo. Magni nesciunt excepturi aspernatur. Magnam aspernatur voluptatem ut saepe. Architecto itaque qui.",
                    "posX": 54,
                    "posY": 25
                },
                {
                    "_id": "5f86354108cbf2387ac8436b",
                    "heading": "Voluptatem velit accusantium tenetur alias quibusdam aliquam.",
                    "description": "Eos in alias autem ipsa voluptatem unde nam in. Quas aut dolorum distinctio sapiente aut. Doloribus nesciunt ea et labore quae quaerat consequatur excepturi. At dolor qui. Ut blanditiis qui modi sit laudantium sit autem id. Nihil architecto commodi rerum architecto nostrum eos.",
                    "posX": 44,
                    "posY": 64
                },
                {
                    "_id": "5f86354108cbf2387ac8436c",
                    "heading": "Debitis qui ut incidunt voluptates voluptatum quia atque deleniti.",
                    "description": "Aliquid nemo accusantium. Ut iusto numquam aut est illo assumenda omnis. Laborum et maxime nostrum aliquid sed hic nemo. Veritatis et quo. Consequatur non maiores. Error debitis illo eos cupiditate rerum reiciendis.",
                    "posX": 20,
                    "posY": 48
                },
                {
                    "_id": "5f86354108cbf2387ac8436d",
                    "heading": "Laborum accusantium atque excepturi sed ea deserunt et vitae ratione.",
                    "description": "Id velit sint sit tempore. Possimus temporibus reiciendis voluptatem rerum quia provident sunt. Aut alias et nihil et aspernatur qui.",
                    "posX": 65,
                    "posY": 72
                }
            ]
        },
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
        "product_features": {
            "header": "Officiis quo nihil.",
            "features": [
                {
                    "_id": "5f86354108cbf2387ac84505",
                    "heading": "Voluptatem nobis ab modi eligendi et hic qui tempore sit.",
                    "description": "Id quis vero maxime quia animi quidem adipisci. Quia blanditiis quia et temporibus velit asperiores. Sed consequuntur maxime rerum numquam fuga voluptates voluptas repudiandae voluptas.",
                    "posX": 68,
                    "posY": 27
                },
                {
                    "_id": "5f86354108cbf2387ac84506",
                    "heading": "Minus ea dolorum aut dicta.",
                    "description": "Autem tempore fugit fugiat vel libero esse similique. Labore tempore corrupti aspernatur eligendi enim et quo ipsa. Sapiente pariatur dolores et. Aspernatur assumenda et dicta velit. Modi aperiam aperiam voluptas doloremque dolorem.",
                    "posX": 16,
                    "posY": 59
                },
                {
                    "_id": "5f86354108cbf2387ac84507",
                    "heading": "Quod ut sint est labore sed similique dolores nobis.",
                    "description": "Voluptatem earum tenetur. Qui eaque exercitationem. Eius vel et aut voluptatem. Accusantium assumenda ducimus.",
                    "posX": 19,
                    "posY": 79
                },
                {
                    "_id": "5f86354108cbf2387ac84508",
                    "heading": "Ea sed sit doloremque.",
                    "description": "Quas sit nobis quam facilis molestias ex possimus aut ratione. Voluptatem voluptates quo aperiam labore asperiores debitis necessitatibus deleniti. Possimus qui aspernatur vel. Dolorem placeat et. Sint recusandae accusantium non et dolor temporibus illo qui veritatis. Sit ad recusandae suscipit.",
                    "posX": 48,
                    "posY": 57
                }
            ]
        },
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
    "product_features": {
        "header": "Eveniet sequi enim veritatis quasi velit esse ea fugit cupiditate.",
        "features": [
            {
                "_id": "5f86354108cbf2387ac84340",
                "heading": "Qui soluta earum eum unde dolore voluptas id ea.",
                "description": "Rerum ut et alias est. Est non dignissimos architecto optio atque tempora perferendis eum velit. Debitis exercitationem tenetur dolores est nihil voluptatem dolore. Ipsa qui dolores ut veniam ut. Sapiente occaecati quasi numquam placeat omnis explicabo et accusantium. Quidem dolor id maxime vel et sequi magni rem quisquam.",
                "posX": 71,
                "posY": 42
            },
            {
                "_id": "5f86354108cbf2387ac84341",
                "heading": "Odio ipsam labore voluptas non aut corporis ut est ducimus.",
                "description": "At iure cum molestiae quae qui dolores officiis quis et. Et sit consectetur provident. Similique harum ad aut deserunt qui iste aperiam quia. Distinctio aperiam fugit neque id.",
                "posX": 17,
                "posY": 71
            },
            {
                "_id": "5f86354108cbf2387ac84342",
                "heading": "Omnis optio neque quae quis repudiandae sunt aut hic vel.",
                "description": "Laboriosam qui a. Reiciendis explicabo porro ducimus dolore esse hic aut cumque. Ea vel placeat. Consequatur est omnis repellat. Qui et similique aut rerum quia. Officia nihil tenetur consequuntur.",
                "posX": 31,
                "posY": 12
            }
        ]
    },
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