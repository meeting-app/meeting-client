import axios from 'axios';

const getHeaders = () => {
  const token = localStorage.userJWT;
  return {
    headers: { Authorization: `Bearer ${token}` }
  };
};

export default {
  user: {
    signin: data => axios.post('/api/v1/auth', data).then(res => res.data),
    signup: user => axios.post('/api/v1/users', user).then(res => res.data),
    fetchCurrent: () => axios.get('/api/v1/users', getHeaders()).then(res => res.data),
    fetchUser: user => axios.get(`/api/v1/users/${user}`).then(res => res.data),
    fetchPostFromUser: user => axios.get(`/api/v1/users/${user}/posts`).then(res => res.data)
  },
  post: {
    fetchAll: () => axios.get('/api/v1/posts', getHeaders()).then(res => res.data),
    create: data => axios.post('/api/v1/posts', data, getHeaders()).then(res => res.data)
  }
}
