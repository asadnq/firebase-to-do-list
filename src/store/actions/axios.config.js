import axios from 'axios';
import store from '../store';


const reqres = axios.create({
    baseURL: 'reqres.in/api/'
});

instance.interceptors.request.use((config) => {
    const token = store.getState().auth.access_token.token;;
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;