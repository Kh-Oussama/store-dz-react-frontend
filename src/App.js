import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
      <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
        </Switch>
        <Footer/>
      </React.Fragment>
  );
}

export default App;
