import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { registerMove, selectIsWinnerByPlayer } from '@ttt/game-board/data';

// Woah ugly
import { RootState } from '../../../../../apps/tic-tac-toe/src/app/root.reducer';

import { GameBoard } from './game-board.component';
import { GameBoardWinner } from './game-board-winner.component';
import { GameBoardStatus } from './game-board-status.component';
import { GameBoardCurrentPlayer } from './game-board-current-player.component';
import { GameBoardDraw } from './game-board-draw.component';

export const GameBoardFeature: React.FC = () => {
  const dispatch = useDispatch();
  const { board, currentPlayer } = useSelector(
    (state: RootState) => state.gameBoard
  );

  const isDraw = useSelector((state: RootState) => {
    const { moves } = state.gameBoard;

    return moves[0].length + moves[1].length === 9;
  });

  const isWinner = useSelector(selectIsWinnerByPlayer(currentPlayer));

  function handleRegisterMove(cellIndex: number) {
    dispatch(registerMove(cellIndex));
  }

  return (
    <StyledGameBoardFeature>
      <GameBoardStatus>
        <GameBoardCurrentPlayer
          currentPlayer={currentPlayer}
        ></GameBoardCurrentPlayer>
        {isWinner && !isDraw ? (
          <GameBoardWinner winner={currentPlayer}></GameBoardWinner>
        ) : isDraw ? (
          <GameBoardDraw></GameBoardDraw>
        ) : (
          <>&nbsp;</>
        )}
        {}
      </GameBoardStatus>
      <GameBoard
        board={board}
        registerMove={cellIndex => handleRegisterMove(cellIndex)}
      ></GameBoard>
    </StyledGameBoardFeature>
  );
};

const StyledGameBoardFeature = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1rem 2rem 4fr;
  gap: 1rem 0;
`;
