import {
  UPDATE_COLLECTION,
  FETCH_COLLECTION_FAILURE,
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS,
} from "./types";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case UPDATE_COLLECTION:
      return {
        ...state,
        collections: payload,
      };
    case FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: payload,
        isFetching: false,
        errorMessage: "",
      };
    case FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: payload,
        isFetching: false,
      };
    case FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default shopReducer;
