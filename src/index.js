import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
//GRAPHQL
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://crwn-clothing.com" }),
  cache: new InMemoryCache(),
});

//check if working
// client.query({
//   query: gql`
//     {
//       collection(id: "cjwuuj5bz000i0719rrtw5gqk") {
//         title
//         items {
//           id
//           name
//           price
//           imageUrl
//         }
//       }
//     }
//   `,
// }).then(res=>console.log(res));
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
