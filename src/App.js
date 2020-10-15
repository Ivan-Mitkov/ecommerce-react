import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, connect, shallowEqual } from "react-redux";
import Header from "./components/header";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInUp from "./pages/auth/SignInUp";
import Checkout from "./pages/checkout";
// import { selectCollectionsForPreview } from "./redux/shop/shopSelector";
import { checkUserSession } from "./redux/user/userActions";
//USING SAGA FOR SIGN IN
function App({ currentUser }) {
  console.log(currentUser)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(checkUserSession());
    console.log(currentUser);

    // eslint-disable-next-line
  }, []);
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
          // component={Checkout}
          render={(props) => {
            return currentUser ? (
              <Checkout to="/checkout" {...props} />
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
const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};
export default connect(mapStateToProps)(App);
