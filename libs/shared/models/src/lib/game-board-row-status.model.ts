import { Player } from './player.model';

export type GameBoardStatus = GameBoardCellStatus[];

export type GameBoardCellStatus = -1 | Player;
