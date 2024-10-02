import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://10.67.23.31:3306'
    baseURL: 'http://10.67.23.52:3306'
});

export default api;

// baseURL: 'http://10.67.23.52:3306' Lab 6
// baseURL: 'http://10.67.23.31:3306' lab 5
