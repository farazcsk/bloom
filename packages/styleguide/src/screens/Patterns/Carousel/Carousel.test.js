import React from 'react';
import { render } from 'react-dom';

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
});

import Carousel from './Carousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Carousel>
      <div>hi</div>
    </Carousel>,
    div,
  );
});
