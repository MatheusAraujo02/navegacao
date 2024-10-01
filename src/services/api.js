import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://10.67.22.50:3306'
});

export default api;