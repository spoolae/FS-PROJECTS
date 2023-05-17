import qs from 'query-string';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

//Users

export const postUser = (values) => httpClient.post('/users', values);

export const getUsers = (options = {}) => {
  const defaultOptions = {
    limit: 10,
    offset: 0,
  };
  const finallyOptions = {
    ...defaultOptions,
    ...options,
  };
  return httpClient.get(`/users?${qs.stringify(finallyOptions)}`);
};

export const getUser = (idUser) => httpClient.get(`/users/${idUser}`);

export const deleteUser = (idUser) =>
  httpClient.delete(`/users/${idUser}/instance`);

export const getUsersCount = () => httpClient.get('/users/count');

//Groups

export const postGroup = (values) =>
  httpClient.post('/groups', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

//Tasks
