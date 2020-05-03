import React from 'react';

import styled from 'styled-components';

export const GameBoardDraw: React.FC = () => (
  <StyledGameBoardDraw>It's a draw!</StyledGameBoardDraw>
);

const StyledGameBoardDraw = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
