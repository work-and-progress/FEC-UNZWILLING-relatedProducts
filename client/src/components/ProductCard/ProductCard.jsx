import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating/StarRating';
import style from './styles.css';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    const {
      id,
      image,
      imageMini,
      isFavorite,
      name,
      onSale,
      price,
      rating,
      related_products,
      salePrice,
      brand,
    } = props.product;

    // console.log(props);
    this.state = {
      id,
      image,
      imageMini,
      isFavorite,
      name,
      onSale,
      price,
      rating,
      related_products,
      salePrice,
      brand,
    };

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(e) {
    const { updateProduct } = this.props;

    // remove this once API is working
    this.setState((prevState) => ({ isFavorite: !prevState.isFavorite }));

    // use this when API is working
    // const updatedProduct = this.state;
    // updatedProduct.isFavorite = !updatedProduct.isFavorite;
    // updateProduct(updatedProduct);
  }

  render() {
    const {
      isFavorite, brand, name, imageMini, rating,
    } = this.state;
    return (
      <div className={style.container}>
        <div className={style.stage}>
          <button type="button" className={isFavorite ? `${style.heart} ${style.is_active}` : style.heart} onClick={this.toggleFavorite}>{ }</button>
        </div>
        <img className={style.image} src={imageMini} alt="thumbnail" />
        <div className={style.brand}>{brand}</div>
        <div className={style.name}>{name}</div>
        <StarRating rating={rating} />
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
