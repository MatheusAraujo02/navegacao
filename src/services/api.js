import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://10.67.23.52:3306'
});

export default api;

// baseUrl: 'http://10.67.23.52:3306' Lab 6