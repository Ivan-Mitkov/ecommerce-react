import React from "react";
import { useQuery, gql } from "@apollo/client";
import Spinner from "../../components/spinner";
import Checkout from "./index";

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;
const Container = () => {
  const { loading, error, data } = useQuery(GET_CART_ITEMS);
  if (loading) return <Spinner />;
  if (error) return `Error! ${error}`;
  const { cartItems } = data;
  return <Checkout cartItems={cartItems}></Checkout>;
};

export default Container;
