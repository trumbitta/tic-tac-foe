/** @format */

// Third Parties
import { createSelector } from '@reduxjs/toolkit';

import { Player } from '@ttt/shared/models';

// Woah ugly
import { RootState } from '../../../../../apps/tic-tac-toe/src/app/root.reducer';
import { GameBoardState, PlayerMoves } from './game-board.slice';

export const selectGameBoard = (state: RootState) => state.gameBoard;

export const selectGameBoardIsGameOver = createSelector<
  RootState,
  GameBoardState,
  boolean
>([selectGameBoard], state => state.gameOver);

export const selectGameBoardMoves = createSelector<
  RootState,
  GameBoardState,
  PlayerMoves
>([selectGameBoard], state => state.moves);

export const selectGameBoardMovesPlayer0 = createSelector<
  RootState,
  PlayerMoves,
  number[]
>([selectGameBoardMoves], moves => moves[0]);

export const selectGameBoardMovesPlayer1 = createSelector<
  RootState,
  PlayerMoves,
  number[]
>([selectGameBoardMoves], moves => moves[1]);

export const selectGameBoardIsWinnerPlayer0 = createSelector<
  RootState,
  number[],
  boolean
>([selectGameBoardMovesPlayer0], moves => isWinner(moves));

export const selectGameBoardIsWinnerPlayer1 = createSelector<
  RootState,
  number[],
  boolean
>([selectGameBoardMovesPlayer1], moves => isWinner(moves));

export const selectGameBoardTheWinnerIs = createSelector<
  RootState,
  boolean,
  Player
>(
  [selectGameBoardIsWinnerPlayer0, selectGameBoardIsWinnerPlayer1],
  (isWinnerPlayer0, isWinnerPlayer1) => {
    if (isWinnerPlayer0) return 0;
    else if (isWinnerPlayer1) return 1;
    else return undefined;
  }
);

export const selectGameBoardIsDraw = createSelector<
  RootState,
  Player,
  PlayerMoves,
  boolean
>(
  selectGameBoardTheWinnerIs,
  selectGameBoardMoves,
  (winner, moves) =>
    winner === undefined && moves[0].length + moves[1].length === 9
);

function isWinner(playerMoves: number[]): boolean {
  if (playerMoves.length < 3) return false;

  const winningMoveSets: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return (
    winningMoveSets.findIndex(
      winningMoveSet =>
        playerMoves.filter(move => winningMoveSet.includes(move)).length === 3
    ) !== -1
  );
}
