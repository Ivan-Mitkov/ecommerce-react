import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
//https://www.npmjs.com/package/redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // only cart will be persisted
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory:directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
