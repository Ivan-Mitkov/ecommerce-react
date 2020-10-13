import {
  SET_CURRENT_USER,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
} from "./types";
export const setCurrentUser = (user) => {
  return { type: SET_CURRENT_USER, payload: user };
};
//Promise based sign in
export const googleSignInStart = () => {
  return { type: GOOGLE_SIGN_IN_START };
};
export const signSuccess = (user) => {
  return { type: SIGN_IN_SUCCESS, payload: user };
};
export const signInFailure = (error) => {
  return { type: SIGN_IN_FAILURE, payload: error };
};
export const emailSignInStart = (emailAndPassword) => {
  return { type: EMAIL_SIGN_IN_START, payload: emailAndPassword };
};

