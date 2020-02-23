import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://3.16.156.21:3334',
  headers: {
    // authorization: `Bearer ${store.getState().auth.token || ''}`,
  },
});

export const list = (path, options = {}) => Axios.get(path, options)
  .then((response) => response.data);

export const create = (path, data, options = {}) => Axios.post(path, data, options)
  .then((response) => response.data);

export const update = (path, data, options = {}) => Axios.put(path, data, options)
  .then((response) => response.data);

export const destroy = (path, options = {}) => Axios.delete(path, options)
  .then((response) => response.data);
