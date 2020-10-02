import React from 'react';
import axios from 'axios';
import style from './styles.css';
import Carousel from './Carousel/Carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProductId: 1,
    };
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  componentDidMount() {
    const { currentProductId } = this.state;
    this.getRelatedProducts(currentProductId);
  }

  getRelatedProducts(id) {
    this.setState({
      products:
        [
          {
            id: 19, image: 'https://unzwilling.s3-us-west-1.amazonaws.com/9.jpg', image_mini: 'https://unzwilling.s3-us-west-1.amazonaws.com/9_mini.jpg', isFavorite: false, name: 'Unbranded Metal Salad', onSale: false, price: 27.77, rating: 1.49, related_products: [4, 80, 52, 70, 71, 69, 33, 74, 74], salePrice: 10.83,
          },
          {
            id: 20, image: 'https://unzwilling.s3-us-west-1.amazonaws.com/10.jpg', image_mini: 'https://unzwilling.s3-us-west-1.amazonaws.com/10_mini.jpg', isFavorite: true, name: 'Licensed Soft Chips', onSale: false, price: 11.71, rating: 1.57, related_products: [68, 76, 43, 2, 75, 86], salePrice: 10.08,
          },
        ],
    });
  }

  updateProduct(updatedProduct) {
    const { currentProductId } = this.state;
    axios.post(`http://localhost:8080/product/${updatedProduct.id}`, updatedProduct)
      .then((response) => {
        this.getRelatedProducts(currentProductId);
      })
      .catch((error) => {
        console.log('ERROR');
      });
  }

  // getRelatedProducts(id) {
  //   axios.get(`http://localhost:8080/relatedProducts/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         products: response.data.products,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log('ERROR: ');
  //     });
  // }

  render() {
    const { products } = this.state;
    return (
      <div className={style.App}>
        <h1 className={style.header}>You may also like</h1>
        <Carousel products={products} updateProduct={this.updateProduct} />
      </div>
    );
  }
}
