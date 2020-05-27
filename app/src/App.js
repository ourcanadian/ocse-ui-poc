import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/compare">Compare</Link>
      <Switch>
        <Route path="/search">
          Search Page
        </Route>
        <Route path="/compare">
          Compare Page
        </Route>
        <Route path="/">
          Home Page
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
