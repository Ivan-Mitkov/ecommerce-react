import { createStore, applyMiddleware } from "redux";
// import logger from 'redux-logger'
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const middleware=[logger]
const middleware = [thunk];
const initialState = {};
let store = null;
//https://github.com/zalmoxisus/redux-devtools-extension
if (process.env.NODE_ENV === "development") {
  store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}

export const persistor = persistStore(store);

export default store;
