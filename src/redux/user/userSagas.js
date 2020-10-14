import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
} from "./types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/utils";
import {
  signSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./userActions";

function* getSnapshotFromUserAuth(userAuth) {
  //work in firebase
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInWithGoogle() {
  try {
    //work in firebase
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
    //change state
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    //change state
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* isAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return;
    }
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signOut() {
  try {
    yield auth.signOut();
    //pass to the reducer
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isAuthenticated);
}
export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}