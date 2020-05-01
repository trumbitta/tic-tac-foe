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
      const { currentPlayer, board, moves } = state;

      state.board[cellIndex] = currentPlayer;
      state.moves[currentPlayer].push(cellIndex);

      state.winner = isWinner(board, moves[currentPlayer]) ? currentPlayer : -1;

      state.currentPlayer = switchPlayer(currentPlayer);
    }
  }
});

export const { registerMove } = gameBoardSlice.actions;

export const gameBoardReducer = gameBoardSlice.reducer;

function switchPlayer(player: Player): Player {
  return (1 - player) as Player;
}

function isWinner(board: GameBoardStatus, moves: number[]): boolean {
  if (moves.length !== 3) return false;

  const winningBoards: number[][] = [
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
    winningBoards.findIndex(
      board =>
        board[0] === moves[0] && board[1] === moves[1] && board[2] === moves[2]
    ) !== -1
  );
}
