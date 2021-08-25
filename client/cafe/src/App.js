import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Row, } from 'react-bootstrap'
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login'
import FormAddMenu from './pages/FormAddMenu';
import PageNotFound from './components/PageNotFound';
import FormAddIngredient from './pages/FormAddIngredient'


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Row> */}
        {/* <NavBar /> */}
        <Switch>
          <PrivateRoute path="/menu/add">
            <FormAddMenu />
          </PrivateRoute>
          <PrivateRoute path="/ingredients/add">
            <FormAddIngredient />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        {/* </Row> */}
      </Router>
    </div>
  );
}

export default App;
