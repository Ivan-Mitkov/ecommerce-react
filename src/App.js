import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { GlobalStyle } from "./globalStyles";
import Header from "./components/header";
// import { selectCollectionsForPreview } from "./redux/shop/shopSelector";
import { checkUserSession } from "./redux/user/userActions";
import Spinner from "./components/spinner";
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const SignInUp = lazy(() => import("./pages/auth/SignInUp"));
const Checkout = lazy(() => import("./pages/checkout"));

//USING SAGA FOR SIGN IN
function App({ currentUser }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={Spinner}>
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
        </Suspense>
        {/* <Route exact path="/checkout" component={Checkout}></Route> */}
      </Switch>
    </>
  );
}
const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};
export default connect(mapStateToProps)(App);
