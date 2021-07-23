import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true,
});

// instance.interceptors.request.use((config) => {
//   if (typeof window !== 'undefined') {
//     config.headers.Authorization = window.localStorage.getItem('token');
//   }
//   return config;
// });

export default instance;


// import axios from 'axios';
// import { parseCookies } from 'nookies';

// const cookies = parseCookies();

// const Axios = axios.create({
//   baseURL: 'http://localhost:3001',
//   headers: {
//     Authorization: 'Bearer ' + cookies?.token,
//   },
// });

// export { Axios };
