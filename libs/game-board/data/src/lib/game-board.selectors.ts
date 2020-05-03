/** @format */

// Third Parties
import { createSelector } from '@reduxjs/toolkit';

import { Player } from '@ttt/shared/models';

import { RootState } from '../../../../../apps/tic-tac-toe/src/app/root.reducer';
import { GameBoardState, PlayerMoves } from './game-board.slice';

export const selectGameBoard = (state: RootState) => state.gameBoard;

export const selectGameBoardMoves = createSelector<
  RootState,
  GameBoardState,
  PlayerMoves
>([selectGameBoard], state => state.moves);

export const selectIsWinnerByPlayer = (player: Player) =>
  createSelector<RootState, PlayerMoves, boolean>(
    [selectGameBoardMoves],
    moves => isWinner(moves[player])
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
