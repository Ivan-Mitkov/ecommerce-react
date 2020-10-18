import React from "react";
import { gql, useQuery,useMutation } from "@apollo/client";
import CartIcon from "./index";
const TOGGLE_CART_HIDDEN = gql`
#like toggleCartHidden from resolvers mutation but capitalize
  mutation ToggleCartHidden($type: String!) {
    #toggleCartHidden from resolvers mutation
   toggleCartHidden @client
  }
`;
const Container = () => {
  const [toggleCartHidden, { data }] = useMutation(TOGGLE_CART_HIDDEN);
  return <CartIcon handleClick={toggleCartHidden}></CartIcon>;
};

export default Container;
