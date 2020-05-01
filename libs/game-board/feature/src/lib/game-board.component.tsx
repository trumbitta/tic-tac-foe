import React from 'react';

import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { GameBoardStatus } from '@ttt/shared/models';

import { GameBoardCell } from './game-board-cell.component';

const StyledGameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  grid-template-rows: repeat(3, 6rem);
  gap: 0.5rem 0.5rem;
`;

interface GameBoardProps {
  board: GameBoardStatus;
  registerMove: (cellIndex: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  board,
  registerMove
}) => {
  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cellIndex: number
  ) => {
    event.preventDefault();

    registerMove(cellIndex);
  };

  return (
    <StyledGameBoard>
      {board.map((cellStatus, cellIndex) => (
        <GameBoardCell
          key={uuid()}
          status={cellStatus}
          onClick={event => handleOnClick(event, cellIndex)}
        ></GameBoardCell>
      ))}
    </StyledGameBoard>
  );
};
