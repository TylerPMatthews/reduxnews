import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Intro from './components/intro/intro';
import Home from './components/home/Home';
function App() {
  return (
    <div>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route exact path='/'>
          <Intro />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
