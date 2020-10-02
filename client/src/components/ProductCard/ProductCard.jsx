import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.css';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    const {
      id, image, image_mini, isFavorite, name, onSale, price, rating, related_products, salePrice,
    } = props.product;

    // console.log(props);
    this.state = {
      id, image, image_mini, isFavorite, name, onSale, price, rating, related_products, salePrice,
    };

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(e) {
    const { updateProduct } = this.props;

    // this.setState((prevState) => ({ isFavorite: !prevState.isFavorite }));
    const updatedProduct = this.state;
    updatedProduct.isFavorite = !updatedProduct.isFavorite;
    // console.log(updatedProduct);
    updateProduct(updatedProduct);
  }

  render() {
    // const { product } = props;
    const { isFavorite, name } = this.state;
    return (
      <div className={style.container}>
        <div className={style.stage}>
          <button type="button" className={isFavorite ? `${style.heart} ${style.is_active}` : style.heart} onClick={this.toggleFavorite}>{ }</button>
        </div>
        {name}
      </div>
    );
  }
}

// Carousel.defaultProps = {
//   header: null,
//   features: null,
//   updateActive: null,
//   activeIndex: 0,
// };

// Carousel.propTypes = {
//   features: PropTypes.arrayOf(
//     PropTypes.shape({
//       heading: PropTypes.string,
//       description: PropTypes.string,
//       posX: PropTypes.number,
//       posY: PropTypes.number,
//     }),
//   ),
//   header: PropTypes.string,
//   updateActive: PropTypes.func,
//   activeIndex: PropTypes.number,
// };
