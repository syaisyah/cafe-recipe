import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login'
import FormAddMenu from './pages/FormAddMenu';
import PageNotFound from './components/PageNotFound';
import Ingredient from './pages/Ingredients';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/menu/add">
            <FormAddMenu />
          </PrivateRoute>
          <PrivateRoute path="/ingredients">
            <Ingredient />
          </PrivateRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
