import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { StartPage } from './components/StartPage/StartPage';
import { GamePage } from './components/GamePage/GamePage';
import { EndPage } from './components/EndPage/EndPage';
import './app.css';

export const App: React.FC = () => {
  const [finalScore, setFinalScore] = useState<string>('$0');

  return (
    <Switch>
      <Route path="/start" exact component={StartPage} />
      <Route path="/game">
        <GamePage setFinalScore={setFinalScore} />
      </Route>
      <Route path="/end">
        <EndPage finalScore={finalScore} />
      </Route>
      <Redirect to="/start" />
    </Switch>
  );
};
