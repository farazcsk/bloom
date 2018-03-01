import PropTypes from 'prop-types';
import React, { Component } from 'react';
import uniqueId from 'lodash/fp/uniqueId';

import css from './SplitWordEntrance.css';

export default class SplitWordEntrance extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    duration: PropTypes.number,
  };

  static defaultProps = {
    duration: 300,
  };

  constructor(props) {
    super(props);

    this.id = uniqueId('Typewriter');
  }

  render() {
    const { children, duration, ...rest } = this.props;

    return (
      <span {...rest}>
        { children.split(' ').map((word, i) => (
          <span key={uniqueId(`${this.id}-${word}`)}>
            <span
              className={css.animation}
              style={{
                animationDuration: `${duration}ms`,
                animationDelay: `${duration * (i * 1.8)}ms`,
              }}
            >
              { word }
            </span>
            { ' ' }
          </span>
        )) }
      </span>
    );
  }
}
