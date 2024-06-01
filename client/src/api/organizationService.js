import axiosInstance from "../config/axios-instance";

export const getOrganizationRequest = () => {
    return axiosInstance.get('/organizations')
}
