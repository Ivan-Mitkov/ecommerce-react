import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Cart from "./index";
const TOGGLE_CART_HIDDEN = gql`
  #like toggleCartHidden from resolvers mutation but capitalize
  mutation ToggleCartHidden($type: String!) {
    #toggleCartHidden from resolvers mutation
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;
const Container = () => {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  const { loading, error, data } = useQuery(GET_CART_ITEMS);
  // console.log(data);
  return (
    <Cart toggleCartHidden={toggleCartHidden} items={data.cartItems}></Cart>
  );
};

export default Container;
