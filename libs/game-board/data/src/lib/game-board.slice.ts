import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  GameBoardStatus,
  Player,
  GameBoardCellStatus
} from '@ttt/shared/models';

type GameBoardState = {
  board: GameBoardStatus;
  currentPlayer: Player;
  moves: {
    0: number[];
    1: number[];
  };
  winner: GameBoardCellStatus;
};

const initialState: GameBoardState = {
  board: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  currentPlayer: 0,
  moves: {
    0: [],
    1: []
  },
  winner: -1
};

const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState,
  reducers: {
    registerMove(state, action: PayloadAction<number>) {
      const cellIndex = action.payload;
      const { currentPlayer, moves } = state;

      state.board[cellIndex] = currentPlayer;
      state.moves[currentPlayer].push(cellIndex);

      state.winner = isWinner(moves[currentPlayer]) ? currentPlayer : -1;

      state.currentPlayer = switchPlayer(currentPlayer);
    }
  }
});

export const { registerMove } = gameBoardSlice.actions;

export const gameBoardReducer = gameBoardSlice.reducer;

function switchPlayer(player: Player): Player {
  return (1 - player) as Player;
}

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
