import {
  SET_CURRENT_USER,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_START
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
export const signOutSuccess = () => {
  return { type: SIGN_OUT_SUCCESS };
};
export const signOutStart = () => {
  return { type: SIGN_OUT_START };
};
export const signOutFailure = (error) => {
  return { type: SIGN_OUT_FAILURE, payload: error };
};
export const checkUserSession=()=>{
  return {type:CHECK_USER_SESSION}
}

