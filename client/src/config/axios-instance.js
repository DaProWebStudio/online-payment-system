import axios from "axios";
import index from "../store/index";

const headers = {
    'Content-Type': 'application/json',
}

const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.171:8000/api/v1',
    headers
})

axiosInstance.interceptors.request.use(
    (config) => {
        const updatedConfig = { ...config }
        const {
            user: { accessToken },
        } = index.getState()
        if (accessToken) {
            updatedConfig.headers.Authorization = `Bearer ${accessToken}`
        }
        return updatedConfig
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            throw new Error('401 unauthorized')
        }
        return Promise.reject(error)
    }
)

export default axiosInstance