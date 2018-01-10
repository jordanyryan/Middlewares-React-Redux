import axios from 'axios';
import {FETCH_USERS} from './types';

export function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const request = axios.get(url);

  return {
    type: FETCH_USERS,
    payload: request
  }
}