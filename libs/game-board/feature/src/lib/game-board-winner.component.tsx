import React from 'react';

import styled from 'styled-components';

import { Player } from '@ttt/shared/models';
import { PlayerName } from '@ttt/shared/ui';

interface GameBoardWinnerProps {
  winner: Player;
}

const StyledGameBoardWinner = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const GameBoardWinner: React.FC<GameBoardWinnerProps> = ({ winner }) => (
  <StyledGameBoardWinner>
    <PlayerName player={winner}></PlayerName> wins!
  </StyledGameBoardWinner>
);
