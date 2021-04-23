import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { StartPage } from './components/StartPage/StartPage';
import { GamePage } from './components/GamePage/GamePage';
import { EndPage } from './components/EndPage/EndPage';
import './App.css';

export const App: React.FC = () => {
  const [finalScore, setFinalScore] = useState<string>('$0');

  return (
    <Switch>
      <Route path="/who" exact component={StartPage} />
      <Route path="/who/game">
        <GamePage setFinalScore={setFinalScore} />
      </Route>
      <Route path="/who/end">
        <EndPage finalScore={finalScore} />
      </Route>
      <Redirect to="/who" />
    </Switch>
  );
};
