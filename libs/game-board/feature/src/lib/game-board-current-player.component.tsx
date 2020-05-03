import React from 'react';

import styled from 'styled-components';

import { Player } from '@ttt/shared/models';
import { PlayerName } from '@ttt/shared/ui';

interface GameBoardCurrentPlayerProps {
  currentPlayer: Player;
}

export const GameBoardCurrentPlayer: React.FC<GameBoardCurrentPlayerProps> = ({
  currentPlayer
}) => (
  <StyledGameBoardCurrentPlayer>
    <PlayerName player={currentPlayer} /> is playing...
  </StyledGameBoardCurrentPlayer>
);

const StyledGameBoardCurrentPlayer = styled.p`
  margin: 0;
  padding: 0;
`;
