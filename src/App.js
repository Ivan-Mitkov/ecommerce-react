import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInUp from "./pages/auth/SignInUp";
import Checkout from "./pages/checkout";
// import { selectCollectionsForPreview } from "./redux/shop/shopSelector";

//USING SAGA FOR SIGN IN
function App({  currentUser }) {
  React.useEffect(() => {
    // eslint-disable-next-line
  }, []);
  // console.log(currentUser);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route
          exact
          path="/signin"
          render={(props) => {
            // console.log(props)
            return currentUser ? (
              <Redirect to="/" {...props} />
            ) : (
              <SignInUp {...props} />
            );
          }}
        ></Route>
        <Route
          exact
          path="/checkout"
          render={(props) => {
            // console.log(props)
            return currentUser ? (
              <Checkout to="/" {...props} />
            ) : (
              <Redirect to="/signin" {...props} />
            );
          }}
        ></Route>
        {/* <Route exact path="/checkout" component={Checkout}></Route> */}
      </Switch>
    </>
  );
}


export default(App);
