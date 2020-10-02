import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.css';

export default function ProductCard(props) {
  const {
    product,
  } = props;

  return (
    <div className={style.wrapper}>
      {product.name}
    </div>
  );
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
