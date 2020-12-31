import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Intro from './components/intro/intro';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Intro />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
