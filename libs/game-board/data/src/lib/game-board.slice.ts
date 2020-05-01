import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  GameBoardRowStatus,
  GameBoardCellCoordinates
} from '@ttt/shared/models';

type GameBoardState = {
  board: GameBoardRowStatus[];
};

const initialState: GameBoardState = {
  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
};

const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState,
  reducers: {
    registerMove(state, action: PayloadAction<GameBoardCellCoordinates>) {
      const { rowIndex, columnIndex } = action.payload;

      state.board[rowIndex][columnIndex] = 1;

      // TODO: check if redux toolkit is now immutable or use the commented version
      // state = {
      //   ...state,
      //   board: state.board.map((row, currentRowIndex) =>
      //     row.map((column, currentColumnIndex) => {
      //       if (
      //         currentRowIndex === rowIndex &&
      //         currentColumnIndex === columnIndex
      //       ) {
      //         row[columnIndex] = 1;
      //       }

      //       return column;
      //     })
      //   )
      // };
    }
    // displayRepo(state, action: PayloadAction<CurrentRepo>) {
    //   const { org, repo } = action.payload;
    //   state.org = org;
    //   state.repo = repo;
    // },
    // setCurrentPage(state, action: PayloadAction<number>) {
    //   state.page = action.payload;
    // },
    // setCurrentDisplayType(state, action: PayloadAction<CurrentDisplayPayload>) {
    //   const { displayType, issueId = null } = action.payload;
    //   state.displayType = displayType;
    //   state.issueId = issueId;
    // }
  }
});

export const {
  registerMove
  // displayRepo,
  // setCurrentDisplayType,
  // setCurrentPage
} = gameBoardSlice.actions;

export const gameBoardReducer = gameBoardSlice.reducer;
