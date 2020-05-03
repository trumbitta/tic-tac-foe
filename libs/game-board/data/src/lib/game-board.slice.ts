import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameBoardStatus, Player } from '@ttt/shared/models';

export interface PlayerMoves {
  0: number[];
  1: number[];
}

export type GameBoardState = {
  board: GameBoardStatus;
  currentPlayer: Player;
  moves: PlayerMoves;
};

const initialState: GameBoardState = {
  board: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  currentPlayer: 0,
  moves: {
    0: [],
    1: []
  }
};

const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState,
  reducers: {
    registerMove(state, action: PayloadAction<number>) {
      const cellIndex = action.payload;
      const { currentPlayer } = state;

      state.board[cellIndex] = currentPlayer;
      state.moves[currentPlayer].push(cellIndex);

      state.currentPlayer = switchPlayer(currentPlayer);
    }
  }
});

export const { registerMove } = gameBoardSlice.actions;

export const gameBoardReducer = gameBoardSlice.reducer;

function switchPlayer(player: Player): Player {
  return (1 - player) as Player;
}
