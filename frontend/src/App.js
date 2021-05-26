import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";

import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import PlaneProfile from './components/PlaneProfile';
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/planes/:planeId'>
            <PlaneProfile />
          </Route>
          <Route path='/planes/availability/:startDate/:endDate'>
            <SearchResults /> 
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
