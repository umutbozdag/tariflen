import axios from 'axios';

export default {
    install: (app) => {
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3000'
        })

        app.config.globalProperties.$axios = axiosInstance;
    }
}