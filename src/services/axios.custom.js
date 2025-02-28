import axios from "axios";

const AxiosCustom = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

AxiosCustom.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

AxiosCustom.interceptors.response.use(function (response) {
    if (response.data && response.data.data) return response.data;
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default AxiosCustom;