import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import CartIcon from "./index";
const TOGGLE_CART_HIDDEN = gql`
  #like toggleCartHidden from resolvers mutation but capitalize
  mutation ToggleCartHidden($type: String!) {
    #toggleCartHidden from resolvers mutation
    toggleCartHidden @client
  }
`;
const GET_TOTAL_COUNT = gql`
  {
    itemCount @client
  }
`;
const Container = () => {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  const { loading, error, data } = useQuery(GET_TOTAL_COUNT);
  return (
    <CartIcon
      handleClick={toggleCartHidden}
      itemsCount={data.itemCount}
    ></CartIcon>
  );
};

export default Container;
