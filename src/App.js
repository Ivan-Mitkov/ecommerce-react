import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/utils";
import Header from "./components/header";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInUp from "./pages/auth/SignInUp";
function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth ,...rest) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth,...rest);
        userRef.onSnapshot((snapshot) => {
          // console.log(snapshot.data());
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        //set null
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFromAuth();
  }, []);
  console.log(currentUser);
  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInUp}></Route>
      </Switch>
    </>
  );
}

export default App;
