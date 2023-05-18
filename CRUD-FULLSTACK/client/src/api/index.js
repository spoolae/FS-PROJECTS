import qs from 'query-string';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

//Users

export const postUser = (user) => httpClient.post('/users', user);

export const getUsers = (options) => {
  const finallyOptions = {
    limit: 10,
    offset: 0,
    ...options,
  };
  return httpClient.get(`/users?${qs.stringify(finallyOptions)}`);
};

export const getUser = (userId) => httpClient.get(`/users/${userId}`);

export const updateUser = (user) => httpClient.put(`/users/${user.id}`, user);

export const deleteUser = (userId) => httpClient.delete(`/users/${userId}`);

export const getUsersCount = () => httpClient.get('/users/count');

//Groups

export const postGroup = (group) =>
  httpClient.post('/groups', group, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

//Tasks
