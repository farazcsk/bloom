import PropTypes from 'prop-types';
import React, { Children } from 'react';

import css from './MobileCardCarousel.css';

const MobileCardCarousel = ({ children = [], title }) => {
  return (
    <div>
      {title && <div className={css.title}>{title}</div> }
      <div className={css.slides}>
        {children.map((slide, index) => (
          <div key={index} className={css.slide}>
            <div className={css.slideInner}>
              {slide}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

MobileCardCarousel.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default MobileCardCarousel;
