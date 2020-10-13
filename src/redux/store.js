import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
// import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { fetchCollection } from '../redux/shop/shopSagas';

// const middleware = [logger,thunk];
const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];
const initialState = {};
let store = null;
//https://github.com/zalmoxisus/redux-devtools-extension
if (process.env.NODE_ENV === "development") {
  store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}

//REDUX PERSIST
export const persistor = persistStore(store);
sagaMiddleware.run(fetchCollection);


export default store;
