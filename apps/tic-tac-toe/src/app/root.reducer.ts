import { combineReducers } from '@reduxjs/toolkit';

import { gameBoardReducer } from '@ttt/game-board/data';

export const rootReducer = combineReducers({ gameBoard: gameBoardReducer });

export type RootState = ReturnType<typeof rootReducer>;
