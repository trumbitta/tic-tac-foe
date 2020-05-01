import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { GameBoardFeature } from '@ttt/game-board/feature';

const StyledApp = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App: React.FC = () => (
  <StyledApp>
    <Route path="/" exact>
      <Redirect to="/game"></Redirect>
    </Route>
    <Route path="/game">
      <GameBoardFeature />
    </Route>
  </StyledApp>
);
