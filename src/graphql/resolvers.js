import { gql } from "@apollo/client";
import { addItemToCart } from "./utils";
export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item): [Item]!
  }
  #type Item from schema
  extend type Item {
    quantity: Int
  }
`;

//read from cashe
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

export const resolvers = {
  Mutation: {
    //type deffinition should to be capitalized
    //this is the actual mutation
    toggleCartHidden: (_root, _args, _context, _info) => {
      //get from cashe
      const data = _context.cache.readQuery({
        query: GET_CART_HIDDEN,
      });
      const { cartHidden } = data;
      //mutate the value and save to cashe
      _context.cache.writeQuery({
        query: GET_CART_HIDDEN,
        //similar to setState({})
        data: { cartHidden: !cartHidden },
      });
      //return the new value
      return cartHidden;
    },
    addItemToCart: (_root, { item }, { cache }, _info) => {
      //get from cashe
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });
      //create new array
      const newCartItems = addItemToCart(cartItems, item);
      //write in cache
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems },
      });
      //return new array
      return newCartItems;
    },
  },
};
