import axiosInstance from "../config/axios-instance";


export const logInRequest = (data) => {
    return axiosInstance.post('/auth/token/', data)
}

export const refreshTokenRequest = (refreshToken) => {
    return axiosInstance.post('/auth/token/refresh/', refreshToken)
}