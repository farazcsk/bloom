import React from 'react';
import { render } from 'react-dom';

import Calendar from './Calendar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Calendar />, div);
});
