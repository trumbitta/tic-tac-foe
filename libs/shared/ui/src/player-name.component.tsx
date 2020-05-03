import React from 'react';

import styled from 'styled-components';

import { Player } from '@ttt/shared/models';

interface PlayerNameProps {
  player: Player;
}

export const PlayerName: React.FC<PlayerNameProps> = ({ player }) => {
  return <StyledPlayerName>{`Player ${player + 1}`}</StyledPlayerName>;
};

const StyledPlayerName = styled.span`
  font-weight: 700;
  font-style: italic;
`;
