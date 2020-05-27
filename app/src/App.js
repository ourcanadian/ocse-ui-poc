import React from 'react';

import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ComparePage from './pages/ComparePage'

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
          <SearchPage/>
        </Route>
        <Route path="/compare">
          <ComparePage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
