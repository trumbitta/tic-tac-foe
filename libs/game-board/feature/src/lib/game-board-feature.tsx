import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { registerMove } from '@ttt/game-board/data';

// Woah ugly
import { RootState } from '../../../../../apps/tic-tac-toe/src/app/root.reducer';

import { GameBoard } from './game-board.component';

export const GameBoardFeature: React.FC = () => {
  const dispatch = useDispatch();
  const { board } = useSelector((state: RootState) => state.gameBoard);

  function handleRegisterMove(cellIndex: number) {
    dispatch(registerMove(cellIndex));
  }

  return (
    <>
      <GameBoard
        board={board}
        registerMove={foo => handleRegisterMove(foo)}
      ></GameBoard>
    </>
  );
};
