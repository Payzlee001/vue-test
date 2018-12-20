import axios from 'axios';

export default {
  get(url, params = {}) {
    return axios.get(url, params);
  },
  post(url, params = {}, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };
    return axios.post(url, params, Object.assign({ headers }, options));
  },
};
