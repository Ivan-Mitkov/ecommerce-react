import {createStore,applyMiddleware}from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { composeWithDevTools } from "redux-devtools-extension";

// const middleware=[logger]
const middleware=[]
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store
