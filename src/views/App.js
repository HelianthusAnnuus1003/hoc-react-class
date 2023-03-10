import './App.scss';
import Navigation from './nav/Navigation';
import HomeComponent from './example/HomeComponent';
import TodoComponent from './example/TodoComponent';
import ListUser from './users/ListUser';
import DetailUser from './users/DetailUser';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <HomeComponent />
          </Route>
          <Route path="/todo">
            <TodoComponent />
          </Route>
          <Route path="/users" exact>
            <ListUser />
          </Route>
          <Route path="/users/:id">
            <DetailUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
