import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import NavBar from './components/NavBar';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Row>
          <NavBar />
          <Col md={10} className=" p-5">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Col>
        </Row>

      </Router>
    </div>
  );
}

export default App;
