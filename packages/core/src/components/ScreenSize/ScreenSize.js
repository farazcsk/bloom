import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { subscribe } from 'subscribe-ui-event';
import { canUseDOM } from 'exenv';

const ScreenSize = ({ ipadSize = 48, desktopSize = 64, render }) => {
  const getSize = () => {
    if (!canUseDOM) {
      return;
    }
    return {
      isMobile: window.matchMedia(`(max-width: ${ipadSize - 0.0625}rem)`).matches,
      isIpad: window.matchMedia(`(min-width: ${ipadSize}rem) and (max-width: ${desktopSize - 0.0625}rem)`).matches,
      isDesktop: window.matchMedia(`(min-width: ${desktopSize}rem)`).matches,
    };
  }

  const [size, setSize] = useState(getSize());
  
  useEffect(() => {
    const handleResize = () => setSize(getSize());
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return render(size)
};

ScreenSize.propTypes = {
  ipadSize: PropTypes.number,
  desktopSize: PropTypes.number,
  render: PropTypes.func,
}

export default ScreenSize;
