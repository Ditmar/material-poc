import { get, post } from '../api';

export const getUsers = (endpoint, payload) => get(endpoint, payload);

export const createUser = (endpoint, payload) => post(endpoint, payload);
