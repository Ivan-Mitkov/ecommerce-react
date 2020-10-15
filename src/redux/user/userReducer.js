import {
  SET_CURRENT_USER,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_START,
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
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
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
    case SIGN_UP_START:
      return {
        ...state,
        currentUser: payload,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
