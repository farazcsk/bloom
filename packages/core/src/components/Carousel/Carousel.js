import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import NukaCarousel from 'nuka-carousel';
import MobileCarousel from './MobileCarousel';
import ScreenSize from '../ScreenSize/ScreenSize';
import Icon from '../Icon/Icon';

import css from './Carousel.css';

const Carousel = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const renderDesktopControls = () => {
    return (
      <div className={css.controls}>
        {props.title && <div className={css.title}>{props.title}</div> }
        { props.slidesToShow < props.slides.length &&
          <div>
            <button
              className={cx(css.button)}
              disabled={slideIndex === 0}
              onClick={() => setSlideIndex(slideIndex - 1)}
            >
              <Icon className={cx(css.chevron, css.prevIcon)} name="chevron-right" />
            </button>
            <button
              className={cx(css.button)}
              disabled={slideIndex === (props.slides.length - props.slidesToShow)}
              onClick={() => setSlideIndex(slideIndex + 1)}
            >
              <Icon className={cx(css.chevron, css.nextIcon)} name="chevron-right" />
            </button>
          </div>
        }
      </div>
    )
  }

  return (
    <ScreenSize render={({ isMobile }) => (
      isMobile ? <MobileCarousel title={props.title}>{props.children}</MobileCarousel> : (
        <div>
          {renderDesktopControls()}
          <NukaCarousel slideIndex={slideIndex} {...props}>
            {props.children.map(slide => (
              <div className={css.slideInner}>{slide}</div>
            ))}
          </NukaCarousel>
        </div>
      )
    )} />
  )
}

Carousel.defaultProps = {
  slidesToShow: 3,
  framePadding: '0px -8px',
  withoutControls: true,
  title: 'Make your idea travel around the world',
  dragging: false,
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Carousel;
