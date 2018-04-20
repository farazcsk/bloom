import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import defaultcss from './ValueIcon.css';
import css from './ValueIconNoBull.css';

const ValueIconNoBull = props => {
  const { className, ...rest } = props;

  return (
    <span className={cx(defaultcss.root, className)} {...rest}>
      <svg viewBox="0 0 63.06 42">
        <path
          d={
            'M18.18,24.94l-5.09,5.44v9.88H9.22V17.41a6.14,6.14,0,0,1,6.12-6.12h23m1.13,' +
            '15.54V41H35.62V26.72m0,.67H22.5a5,5,0,0,1-4.32-2.45M44.86,19.3H42.34A2.25,2.25,0,0,1,' +
            '40.13,17a2.09,2.09,0,0,1,.21-1L37.91,9.06c-.36.1-.77.21-1.29.36a5,5,0,0,1-1.39.26,2.17' +
            ',2.17,0,0,1-2.16-1.34,2,2,0,0,1,.21-2c.21-.21.62-.46,2-.46a14.93,14.93,0,0,1,' +
            '2.47.26V6.08a3.9,3.9,0,0,1-.05-.77V5.25l.21-2.06c.05-.51.1-1,.15-1.44,' +
            '0-.21.05-.36.05-.46a.65.65,0,0,1,.62-.67h.57V3.86a1,1,0,0,0,1,1h6.38a1,1,0,0,0,' +
            '1-1V.62h.57c.51,0,.57.51.62.67s.05.26.05.46c.05.41.1.93.15,1.44l.21,2.06v.82a16.29,' +
            '16.29,0,0,1,2.11-.15c1.49,0,2,.26,2.16.46a1.76,1.76,0,0,1,.26,1.9,2.3,2.3,0,0,1-2.42,' +
            '1.44h0a6,6,0,0,1-1.54-.26A7.94,7.94,0,0,0,49,9.21l-2.26,6.64A2.39,2.39,0,0,1,47.07,17,' +
            '2.27,2.27,0,0,1,44.86,19.3Zm-23.13,8c-.36,2.26-2.68,3.61-5.4,3.61h0a7.32,7.32,0,0,' +
            '1-3-.76M39.52,27.1c1.91-.26,4.5-2,4.25-7.32'
          }
        />
        <g className={css.noCircle}>
          <circle cx="27.09" cy="21.88" r="14.8" />
          <line x1="17.42" y1="10.4" x2="37.77" y2="31.99" />
        </g>
      </svg>
    </span>
  );
};

ValueIconNoBull.propTypes = {
  className: PropTypes.string,
};

export default ValueIconNoBull;
