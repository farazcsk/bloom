import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MobileCarousel from './MobileCarousel';

it('renders without crashing', () => {
  const { container } = render(
    <MobileCarousel>
      <span>child</span>
      <span>child</span>
    </MobileCarousel>
  );
});
