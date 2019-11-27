import PropTypes from 'prop-types';
import React, { Children } from 'react';

import css from './MobileCarousel.css';

const MobileCarousel = ({ slidchildrenes = [], title }) => {
  return (
    <div>
      {title && <div className={css.title}>{title}</div> }
      <div className={css.slides}>
        {children.map(slide => (
          <div className={css.slide}>
            <div className={css.slideInner}>
              {slide}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

MobileCarousel.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default MobileCarousel;
