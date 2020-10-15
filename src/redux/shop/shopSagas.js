import { takeEvery, takeLatest, delay, put, call } from "redux-saga/effects";
import {
  FETCH_COLLECTION_START,
} from "./types";
import { firestore, converCollectionSnapshotToMap } from "../../firebase/utils";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shopAction";
export function* fetchCollectionAsync() {
  // yield console.log("I am fired");
  try {
    //get collection ref from firestore
    const collectionRef = yield firestore.collection("collections");
    //get data from this ref
    const snapshot = yield collectionRef.get();
    const collectionMapped = yield call(
      converCollectionSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionMapped));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }

  
}

export function* fetchCollection() {
  yield takeLatest(FETCH_COLLECTION_START, fetchCollectionAsync);
}
