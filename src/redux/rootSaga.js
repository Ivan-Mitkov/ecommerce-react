import { all, call } from "redux-saga/effects";
import { fetchCollection } from "./shop/shopSagas";
export default function* rootSaga() {

  //all - Creates an Effect description that instructs the middleware to run multiple Effects in parallel and wait for all of them to complete. 
  yield all([call(fetchCollection)]);
}
