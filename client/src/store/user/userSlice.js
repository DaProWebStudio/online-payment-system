import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    isAuthorized: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn(state, { payload }) {
            state.accessToken = payload.accessToken
            state.refreshToken = payload.refreshToken
            state.isAuthorized = true
        },
        logOut(state){
            state.accessToken = null
            state.refreshToken = null
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;