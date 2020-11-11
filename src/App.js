import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
      <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
      </React.Fragment>
  );
}

export default App;
