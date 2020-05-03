import React from 'react';

import styled, { css } from 'styled-components';
import { GameBoardCellStatus } from '@ttt/shared/models';

interface GameBoardCellProps {
  status: GameBoardCellStatus;
}

export const GameBoardCell = styled.div<GameBoardCellProps>`
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  border-width: 0.125rem;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  cursor: pointer;

  ${({ status }) =>
    status === -1
      ? css`
          background-color: transparent;
          border-color: #cdcdcd;
        `
      : status === 1
      ? css`
          background-color: rebeccapurple;
          border-color: rebeccapurple;
        `
      : css`
          background-color: tomato;
          border-color: tomato;
        `};
`;
