import React from 'react';
import axios from 'axios';
import style from './styles.css';
import Carousel from './Carousel/Carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  componentDidMount() {
    this.getRelatedProducts(1);
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
        <Carousel products={products} />
      </div>
    );
  }
}
