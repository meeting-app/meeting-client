import axios from 'axios';

export default {
  user: {
    signin: data => axios.post('/api/v1/auth', data).then(res => res.data),
    signup: user => axios.post('/api/v1/users', user).then(res => res.data)
  }
}
