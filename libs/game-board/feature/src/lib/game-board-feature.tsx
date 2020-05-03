import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  registerMove,
  gameOver,
  selectGameBoardTheWinnerIs,
  selectGameBoardIsGameOver,
  selectGameBoardIsDraw
} from '@ttt/game-board/data';

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

  const winner = useSelector(selectGameBoardTheWinnerIs);

  const isDraw = useSelector(selectGameBoardIsDraw);

  const isGameOver = useSelector(selectGameBoardIsGameOver);

  if (winner !== undefined || isDraw) {
    dispatch(gameOver());
  }

  function handleRegisterMove(cellIndex: number) {
    !isGameOver && dispatch(registerMove(cellIndex));
  }

  return (
    <StyledGameBoardFeature>
      <GameBoardStatus>
        {winner === undefined && !isDraw ? (
          <GameBoardCurrentPlayer
            currentPlayer={currentPlayer}
          ></GameBoardCurrentPlayer>
        ) : winner !== undefined && !isDraw ? (
          <GameBoardWinner winner={winner}></GameBoardWinner>
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
  grid-template-rows: 2rem 4fr;
  gap: 1rem 0;
`;
