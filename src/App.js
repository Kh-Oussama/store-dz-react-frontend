import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";


import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import ViewProduct from "./pages/view-product-page/view-product-page.component";
import ContactUs from "./pages/contact-us/contact-us.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import {selectCheckLoading, selectCurrentUser} from "./redux/users/user.selectors";
import {checkUserSession, refreshUserSession} from "./redux/users/user.actions";
import LoaderHuge from "./components/loader/loader-huge.component";

function App({checkUserSession, refreshUserSession, currentUser, checkLoading,}) {

    useEffect(() => {
        checkUserSession()
    }, [checkUserSession]);

    useEffect(() => {

        if (currentUser) {
            refreshUserSession()
        }
    }, [currentUser]);

    return (
        <React.Fragment>

            {
                checkLoading
                    ? <LoaderHuge/>
                    :
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/shop" component={ShopPage}/>
                        <Route exact path="/view" component={ViewProduct}/>
                        <Route exact path="/contactus" component={ContactUs}/>
                        <Route exact path="/checkout" component={CheckoutPage}/>
                        <Route exact path='/login'
                               render={() => currentUser
                                   ? (<Redirect to='/'/>)
                                   : (<SignIn/>)
                               }
                        />
                        <Route exact path='/register'
                               render={() => currentUser
                                   ? (<Redirect to='/'/>)
                                   : (<SignUp/>)
                               }
                        />
                        <Redirect to="/"/>
                    </Switch>
            }
        </React.Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    checkLoading: selectCheckLoading,
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
    refreshUserSession: () => dispatch(refreshUserSession()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

