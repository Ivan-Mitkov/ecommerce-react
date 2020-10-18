import React from "react";
import { gql, useMutation } from "@apollo/client";
import Checkout from "./index";

const DECREASE_ITEM_TO_CART = gql`
  mutation DecreaseItems($item: Item!) {
    #implementation in resolvers
    decreaseItems(item: $item) @client
  }
`;
const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    #implementation in resolvers
    addItemToCart(item: $item) @client
  }
`;
const CLEAR_ITEM_FROM_CART = gql`
  mutation RemoveItem($item: Item!) {
    #implementation in resolvers
    removeItem(item: $item) @client
  }
`;
const Container = ({ cartItem }) => {
  const [addItemToCart] = useMutation(ADD_ITEM_TO_CART);
  const [decreaseItems] = useMutation(DECREASE_ITEM_TO_CART);
  const [removeItem] = useMutation(CLEAR_ITEM_FROM_CART);
  return (
    <Checkout
      cartItem={cartItem}
      addItem={(item) => addItemToCart({ variables: { item } })}
      decreaseQuantity={(item) => decreaseItems({ variables: { item } })}
      removeItem={(item) => removeItem({ variables: { item } })}
    ></Checkout>
  );
};

export default Container;
