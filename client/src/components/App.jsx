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

  getProduct(id) {
    this.setState({ currentProductId: id });
    this.getRelatedProducts(id);
  }

  getRelatedProducts(id) {
    axios.get(`/relatedProducts/${id}`)
      .then((response) => {
        this.setState({
          products: response.data,
        });
      })
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  }

  updateProduct(updatedProduct) {
    const { currentProductId } = this.state;
    axios.post(`/products/${updatedProduct.id}`, updatedProduct)
      .then((response) => {
        this.getRelatedProducts(currentProductId);
      })
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className={style.relatedProducts}>
        <h1 className={style.header}>You may also like</h1>
        <Carousel products={products} updateProduct={this.updateProduct} />
      </div>
    );
  }
}
