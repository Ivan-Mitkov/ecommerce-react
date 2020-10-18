import React from "react";
import { gql, useMutation } from "@apollo/client";
import CollectionItem from "./index";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    #implementation in resolvers
    addItemToCart(item: $item) @client
  }
`;
const Container = ({ item }) => {
  const [addItemToCart] = useMutation(ADD_ITEM_TO_CART);

  return (
    <CollectionItem
      item={item}
      addItem={(item) => addItemToCart({ variables: { item } })}
    ></CollectionItem>
  );
};

export default Container;
