import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

//read from cashe
const GET_CART_HIDDEN = gql`
  {
    # get from client cash
    cartHidden @client
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
  },
};
