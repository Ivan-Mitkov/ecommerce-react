import { UPDATE_COLLECTION } from "./types";

const initialState = {
  collections: null,
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
    default:
      return state;
  }
};

export default shopReducer;
