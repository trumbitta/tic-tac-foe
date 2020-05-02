import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { registerMove } from '@ttt/game-board/data';

// Woah ugly
import { RootState } from '../../../../../apps/tic-tac-toe/src/app/root.reducer';

import { GameBoard } from './game-board.component';
import { GameBoardWinner } from './game-board-winner.component';
import styled from 'styled-components';

const BaseGameBoardFeature: React.FC = () => {
  const dispatch = useDispatch();
  const { board, winner } = useSelector((state: RootState) => state.gameBoard);

  function handleRegisterMove(cellIndex: number) {
    dispatch(registerMove(cellIndex));
  }

  return (
    <div>
      <GameBoard
        board={board}
        registerMove={foo => handleRegisterMove(foo)}
      ></GameBoard>
      {winner !== -1 ? (
        <GameBoardWinner winner={winner}></GameBoardWinner>
      ) : null}
    </div>
  );
};

export const GameBoardFeature = styled(BaseGameBoardFeature)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 1fr;
  gap: 0.5rem 0;
`;
