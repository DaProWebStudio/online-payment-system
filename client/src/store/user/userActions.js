import {logInRequest, refreshTokenRequest} from "../../api/userService";
import {userActions} from "./userSlice";

export const logIn = (formData, afterClose) => {
    return async dispatch => {
        try {
            const response = await logInRequest(formData)
            const { access, refresh } = response.data
            dispatch(userActions.logIn({
                accessToken: access,
                refreshToken: refresh,
            }))
            localStorage.setItem('accessToken', access)
            afterClose()
        } catch (e) {
            console.error(e)
        }
    }
}

export const updateTokens = () => {
    return async dispatch => {
        try {
            const getRefreshToken = localStorage.getItem('refreshToken')
            const response = await refreshTokenRequest(getRefreshToken)
            const { access, refresh } = response.data
            dispatch(userActions.logIn({
                accessToken: access,
            }))
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);
        } catch (e) {
            console.error(e)
        }
    }
}

export const logoutUser = (navigate) => {
    return async dispatch => {
        try {
            dispatch(userActions.logOut())
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            navigate('/')
        } catch (e) {
            console.error(e)
        }
    }

}

