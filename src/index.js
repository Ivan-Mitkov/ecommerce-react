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
const query = gql`
  {
    cartHidden
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
  query,
  data: {
    cartHidden: true,
  },
});
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
