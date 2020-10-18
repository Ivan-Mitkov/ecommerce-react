import React from "react";
import { gql, useQuery } from "@apollo/client";
import Header from "./index";
//the same as in resolver
const GET_CART_HIDDEN = gql`
  {
    # get from client cash
    cartHidden @client
  }
`;
const Container = () => {
  const { loading, error, data } = useQuery(GET_CART_HIDDEN);
  const { cartHidden } = data;
  return <Header hidden={cartHidden}></Header>;
};

export default Container;
