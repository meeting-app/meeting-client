import api from '../api';
import { USER_LOGGED_IN } from '../constantes/types';

export const userLoggedIn = data => ({
  type: USER_LOGGED_IN,
  data
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
