import {
  loginUserWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSigning = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const resp = await signInWithGoogle();
    if (!resp.ok) return dispatch(logout(resp));

    dispatch(login(resp));
  };
};

export const startRegisterUserWithEmailAndPassword = (email, password, displayName) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const resp = await registerUserWithEmailAndPassword(email, password, displayName);
    console.log(resp);

    if (!resp.ok) return dispatch(logout(resp));

    dispatch(login(resp));
  };
};

export const startLoginWithEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const resp = await loginUserWithEmailAndPassword(email, password);

    if (!resp.ok) return dispatch(logout(resp));

    dispatch(login(resp));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(clearNotesLogout());
    dispatch(logout());
  };
};
