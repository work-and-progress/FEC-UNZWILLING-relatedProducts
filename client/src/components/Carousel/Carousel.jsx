import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.css';
import ProductCard from '../ProductCard/ProductCard';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.scrollRef = React.createRef();
    this.goToPrevious = this.goToPrevious.bind(this);
    this.goToNext = this.goToNext.bind(this);
  }

  goToPrevious() {
    this.scrollRef.current.scrollLeft -= 175;
  }

  goToNext() {
    this.scrollRef.current.scrollLeft += 175;
  }

  render() {
    const { products, updateProduct } = this.props;
    return (
      <div className={style.wrapper}>
        <button type="button" className={`${style.arrows} ${style.arrows_left}`} onClick={this.goToPrevious}>
          <span />
        </button>

        <div className={style.cards} ref={this.scrollRef}>
          {products.map((product) => (
            <ProductCard
              product={product}
              updateProduct={updateProduct}
              className={style.slide_item}
            />
          ))}
        </div>

        <button type="button" className={`${style.arrows} ${style.arrows_right}`} onClick={this.goToNext}>
          <span />
        </button>

      </div>
    );
  }
}

Carousel.defaultProps = {
  products: [],
  updateProduct: null,
};

Carousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      brand: PropTypes.string,
      name: PropTypes.string,
      product_features:
        PropTypes.shape({
          header: PropTypes.string,
          features: PropTypes.arrayOf(
            PropTypes.shape({
              heading: PropTypes.string,
              description: PropTypes.string,
              posX: PropTypes.number,
              posY: PropTypes.number,
            }),
          ),
        }),
      related_products: PropTypes.arrayOf(PropTypes.number),
      image: PropTypes.string,
      imageMini: PropTypes.string,
      price: PropTypes.number,
      salePrice: PropTypes.number,
      onSale: PropTypes.bool,
      rating: PropTypes.number,
      isFavorite: PropTypes.bool,
    }),
  ),
  updateProduct: PropTypes.func,
};
