import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    organization: []
}

const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
        getAllOrganization(state, { payload }) {
            state.organization = payload.organization
        }
    }
})

export const organizationActions = organizationSlice.actions
export default organizationSlice