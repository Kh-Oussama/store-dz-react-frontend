import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Footer from "./components/footer/footer.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import ViewProduct from "./pages/view-product/view-product.component";

function App() {
  return (
      <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/view" component={ViewProduct} />
        </Switch>
        <Footer/>
      </React.Fragment>
  );
}

export default App;
