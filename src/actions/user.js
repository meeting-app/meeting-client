import api from '../api';
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from '../constantes/types';

export const userLoggedIn = data => ({
  type: USER_LOGGED_IN,
  data
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.userJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const signin = data => dispatch =>
  api.user.signin(data).then(user => {
    localStorage.userJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const fetchCurrent = () => dispatch =>
  api.user.fetchCurrent().then(user => {
    dispatch(userLoggedIn(user))
  });

export const logout = () => dispatch => {
  localStorage.removeItem('userJWT');
  dispatch(userLoggedOut());
};
