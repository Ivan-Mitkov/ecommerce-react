import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
//GRAPHQL
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import { createHttpLink } from "apollo-link-http";
import { gql, useQuery } from "@apollo/client";
import { resolvers, typeDefs } from "./graphql/resolvers";

// Query for writing in InMemoryCache
const GET_CART_HIDDEN = gql`
  {
    # get from client cash
    cartHidden @client
  }
`;
const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: createHttpLink({ uri: "https://crwn-clothing.com" }),
  cache,
  //include type deffinition and resolvers in client
  typeDefs,
  resolvers,
});

client.writeQuery({
  query: GET_CART_HIDDEN,
  data: {
    cartHidden: true,
  },
});
client.writeQuery({
  query: GET_CART_ITEMS,
  data: {
    cartItems: [],
  },
});

// console.log(client.cache);
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
