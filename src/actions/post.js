import api from '../api';
import {
  POSTS_FETCHED,
  POST_CREATED
} from '../constantes/types';

export const postsFetched = data => ({
  type: POSTS_FETCHED,
  data
});

export const postCreated = data => ({
  type: POST_CREATED,
  data
});

export const fetchAll = () => dispatch =>
  api.post.fetchAll().then(data => {
    console.log('fetch all', data);
    dispatch(postsFetched(data));
  });

export const create = post => dispatch =>
  api.post.create(post).then(data => {
    dispatch(postCreated(data));
  });
