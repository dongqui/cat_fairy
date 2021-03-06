import { call, put } from "redux-saga/effects";
import { fireAuth, githubAuthProvider } from "../firebase";
import { action } from "./helper";

export const LOGIN_WITH_GITHUB = 'LOGIN_WITH_GITHUB';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED  = 'LOGIN_FAILED';

export const loginWithGithub = () => action(LOGIN_WITH_GITHUB);
export const loginSuccess= (user) => action(LOGIN_SUCCESS, { user });
export const loginFailed = (error) => action(LOGIN_FAILED, { error });

export function* signInWithRedirect() {
  try {
    yield call([fireAuth, fireAuth.signInWithRedirect], githubAuthProvider);
  } catch (error) {
    yield put(loginFailed(error));
  }
}

const initialState = {
  user: null,
};
export default function auth(state=initialState, action={}) {
  const { user } = action.payload || {};
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user
      };
    case LOGIN_FAILED:
      return {};
    default:
      return state;
  }
}
