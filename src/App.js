import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Users from "./user/pages/User";
import NewPlaces from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from  './places/pages/UserPlaces';
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path='/:userId/places' exact component={UserPlaces} />
          <Route path="/places/new" exact component={NewPlaces} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
