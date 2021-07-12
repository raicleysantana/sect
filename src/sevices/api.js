import axios from 'axios';

const url = 'http://177.66.8.74:8082/_apps/app_teste/';

const api = axios.create({
    baseURL: url,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset=UTF-8"
    },
});

export default api;