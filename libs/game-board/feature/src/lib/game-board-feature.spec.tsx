import React from 'react';
import { render } from '@testing-library/react';

import GameBoardFeature from './game-board-feature';

describe(' GameBoardFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameBoardFeature />);
    expect(baseElement).toBeTruthy();
  });
});
