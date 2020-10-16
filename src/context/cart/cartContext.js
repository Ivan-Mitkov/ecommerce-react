import {createContext} from 'react';
//The defaultValue in our case SHOP_DATA argument is only used when a component does not have a matching Provider above it in the tree.
const CartContext=createContext(null)

export default CartContext