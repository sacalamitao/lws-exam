// src/axiosConfig.js

import axios from 'axios';

// Set the default base URL for Axios requests
axios.defaults.baseURL = 'http://localhost:8000/'; // Adjust as needed

// Include credentials (cookies) in requests
axios.defaults.withCredentials = true;

// Function to get the CSRF token from the meta tag
const getCsrfToken = () => {
    const tokenElement = document.querySelector('meta[name="csrf-token"]');
    return tokenElement ? tokenElement.getAttribute('content') : '';
};

// Set the CSRF token header for all Axios requests
axios.defaults.headers.common['X-CSRF-TOKEN'] = getCsrfToken();

export default axios;
