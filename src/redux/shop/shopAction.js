import {
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_FAILURE,
  FETCH_COLLECTION_SUCCESS,
} from "./types";
import { firestore, converCollectionSnapshotToMap } from "../../firebase/utils";


export const fetchCollectionStart = () => {
  return { type: FETCH_COLLECTION_START };
};
export const fetchCollectionAsync = () => (dispatch) => {
  //get collection ref from firestore
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionStart());
  //get data from this ref
  collectionRef
    .get()
    .then((snapshot) => {
      //convert data from firebase to format {id,title,items,routeName}
      const collectionMapped = converCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionMapped));
    })
    .catch((err) => dispatch(fetchCollectionFailure(err.message)));
};

export const fetchCollectionSuccess = (collectionObj) => {
  return { type: FETCH_COLLECTION_SUCCESS, payload: collectionObj };
};
export const fetchCollectionFailure = (collectionObj) => {
  return { type: FETCH_COLLECTION_FAILURE, payload: collectionObj };
};
