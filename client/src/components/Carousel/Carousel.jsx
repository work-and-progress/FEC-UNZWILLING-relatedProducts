import React from 'react';
// import PropTypes from 'prop-types';
import style from './styles.css';
import ProductCard from '../ProductCard/ProductCard';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      length: props.products.length,
    };

    this.scrollRef = React.createRef();

    // Object.defineProperty(this.scrollRef, 'scrollBy', {
    //   value(x, y) {
    //     el.scrollTop += y;
    //     el.scrollLeft += x;
    //   },
    //   enumerable: false,
    // });

    this.goToPrevious = this.goToPrevious.bind(this);
    this.goToNext = this.goToNext.bind(this);
  }

  goToPrevious() {
    const { activeIndex } = this.state;
    if (activeIndex > 0) {
      this.setState({ activeIndex: activeIndex - 1 });
    }
    this.scrollRef.current.scrollLeft -= 175;
    console.log(this.scrollRef);
  }

  goToNext() {
    const { activeIndex, length } = this.state;
    if (activeIndex < length) {
      this.setState({ activeIndex: activeIndex + 1 });
    }
    this.scrollRef.current.scrollLeft += 175;
    console.log(this.scrollRef);
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
