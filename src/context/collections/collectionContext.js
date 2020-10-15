import {createContext} from 'react';
import {SHOP_DATA} from './shopData';
//The defaultValue in our case SHOP_DATA argument is only used when a component does not have a matching Provider above it in the tree.
const CollectionContext=createContext(SHOP_DATA)

export default CollectionContext