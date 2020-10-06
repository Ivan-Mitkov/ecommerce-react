import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/utils";
import Header from "./components/header";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInUp from "./pages/auth/SignInUp";
import { setCurrentUser } from "./redux/user/userActions";

function App({ setCurrentUser, currentUser }) {
  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth, ...rest) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth, ...rest);
          userRef.onSnapshot((snapshot) => {
            // console.log(snapshot.data());
            setCurrentUser({ id: snapshot.id, ...snapshot.data() });
          });
        } else {
          //set null
          setCurrentUser(userAuth);
        }
      }
    );

    return () => unsubscribeFromAuth();
  }, []);
  // console.log(currentUser);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
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
      </Switch>
    </>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });
const mapStateToProps = (state) => {
  // console.log(state);
  return { currentUser: state.user.currentUser };
};
export default connect(mapStateToProps, { setCurrentUser })(App);
