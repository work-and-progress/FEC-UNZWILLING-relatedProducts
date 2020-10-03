import React from 'react';
// import PropTypes from 'prop-types';
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
          {products.map((product, index) => (
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
