import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const fetchUsers = (page = 1) => {
  return axios.get(`${API_URL}/users?page=${page}`);
};

export const fetchUser = (id) => {
  return axios.get(`${API_URL}/users/${id}`);
};

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/register`, userData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
