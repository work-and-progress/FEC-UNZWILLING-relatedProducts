import React from 'react';
// import PropTypes from 'prop-types';
import style from './styles.css';

export default function StarRating(props) {
  const { rating } = props;
  const percentageRating = (rating / 5) * 100;

  return (
    <div className={style.star_ratings}>
      <div className={style.fill_ratings} style={{width: `${percentageRating}%`}}>
        <span>★★★★★</span>
      </div>
      <div className={style.empty_ratings}>
        <span>★★★★★</span>
      </div>
    </div>
  );
}
