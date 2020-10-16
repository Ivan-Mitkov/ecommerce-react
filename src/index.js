import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import CartProvider from "./providers/cart/CartProvider";
ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </CartProvider>
  </Provider>,
  document.getElementById("root")
);
