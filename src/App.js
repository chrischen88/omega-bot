import React from 'react';
import MyNavbar from './components/MyNavbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Bot from "./components/Bot";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" fixed="top">
          <Navbar.Brand href="">Botmega</Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href="/">Bot</Nav.Link>
              <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/">
            <Bot/>
          </Route>
          <Route path="/settings">
            <Settings/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
