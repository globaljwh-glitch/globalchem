import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://admin1.globalchemicalscorp.com',
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

});

export default axiosInstance;
