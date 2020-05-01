import React from 'react';

import styled from 'styled-components';
import { GameBoardCellStatus } from '@ttt/shared/models';

interface GameBoardCellProps {
  status: GameBoardCellStatus;
}

export const GameBoardCell = styled.div<GameBoardCellProps>`
  background-color: ${({ status }) =>
    status === 0 ? 'transparent' : status === 1 ? 'rebeccapurple' : 'tomato'};
  width: 100%;
  height: 100%;
  border: 1px solid rebeccapurple;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  cursor: pointer;
`;
