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
    if (props.slidesToShow === 1) {
      return null;
    }
    return (
      <div className={css.controls}>
        {props.title && <div className={css.title}>{props.title}</div> }
        { props.slidesToShow < props.children.length &&
          <div className={css.buttons}>
            <button
              className={cx(css.button)}
              disabled={slideIndex === 0}
              onClick={() => setSlideIndex(slideIndex - 1)}
            >
              <Icon className={cx(css.chevron, css.prevIcon)} name="chevron-right" />
            </button>
            <button
              className={cx(css.button)}
              disabled={slideIndex === (props.children.length - props.slidesToShow)}
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
    <ScreenSize render={({ isMobile, isIpad, isDesktop }) => (
      isMobile && props.useMobileCarousel ? <MobileCarousel title={props.title}>{props.children}</MobileCarousel> : (
        <div>
          {renderDesktopControls()}
          <NukaCarousel
            slideIndex={slideIndex}
            framePadding={isIpad ? "0px -8px" : "0px -4px"}
            {...props}
          >
            {props.children.map((slide, index) => (
              <div key={index} className={css.slideInner}>{slide}</div>
            ))}
          </NukaCarousel>
        </div>
      )
    )} />
  )
}

Carousel.defaultProps = {
  withoutControls: true,
  dragging: false,
  slidesToShow: 1,
  useMobileCarousel: true,
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  useMobileCarousel: PropTypes.bool.isRequired,
}

export default Carousel;
