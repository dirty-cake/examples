import React from 'react';

import check from '../assets/review/check.png';
import { Rating } from './Rating';

export const Review = ({ data }) => {
  const { description, title, author, rating } = data;
  return (
    <div className="review">
      <Rating stars={rating} className="star_third" />
      <div className="review__title subtitle_main nowrap">{title}</div>
      <p className="review__message caption_main op_75">{description}</p>
      <div className="review__author">
        <span className="label_main op_50">{author}</span>
        <img src={check} alt="Martha Z." height={14} width={14} />
      </div>
    </div>
  );
};
