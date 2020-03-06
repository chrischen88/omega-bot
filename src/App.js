import React from 'react';
import './App.css';
import {AppBar, Tabs, Tab, Typography} from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Bot from './components/Bot';
import Settings from './components/Settings';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/bot" component={Bot} />
          <Route path="/settings" component={Settings} />
          <Route component={Bot} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
