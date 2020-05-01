import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { GameBoardCellCoordinates } from '@ttt/shared/models';
import { registerMove } from '@ttt/game-board/data';

// Woah ugly
import { RootState } from '../../../../../apps/tic-tac-toe/src/app/root.reducer';

import { GameBoardCell } from './game-board-cell.component';

/* eslint-disable-next-line */
export interface GameBoardFeatureProps {}

const StyledGameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  grid-template-rows: repeat(3, 6rem);
  gap: 0.5rem 0.5rem;
  /* grid-template-areas: '. . .' '. . .' '. . .'; */
`;

export const GameBoard = (props: GameBoardFeatureProps) => {
  // TODO: linearize matrix to array
  const { board } = useSelector((state: RootState) => state.gameBoard);

  console.table(board);
  const dispatch = useDispatch();

  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cellCoordinates: GameBoardCellCoordinates
  ) => {
    event.preventDefault();

    dispatch(registerMove(cellCoordinates));
  };

  return (
    <StyledGameBoard>
      {board.map((row, rowIndex) =>
        row.map((cellStatus, columnIndex) => (
          <GameBoardCell
            key={uuid()}
            status={cellStatus}
            onClick={event => handleOnClick(event, { rowIndex, columnIndex })}
          ></GameBoardCell>
        ))
      )}
    </StyledGameBoard>
  );
};

export default GameBoard;
