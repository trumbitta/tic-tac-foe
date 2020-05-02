import React from 'react';

import styled from 'styled-components';

import { Player } from '@ttt/shared/models';

interface GameBoardWinnerProps {
  winner: Player;
}

const StyledGameBoardWinner = styled.p`
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const GameBoardWinner: React.FC<GameBoardWinnerProps> = ({ winner }) => (
  <StyledGameBoardWinner>{winner} wins!</StyledGameBoardWinner>
);
