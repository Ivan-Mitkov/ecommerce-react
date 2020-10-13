import {
  SET_CURRENT_USER,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START
} from "./types";
const initialState = { currentUser: null, error: null };

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: payload,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case GOOGLE_SIGN_IN_START:
      return {
        ...state,
        currentUser: payload,
      };
    case EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
