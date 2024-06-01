import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import organizationSlice from "./organization/organizationSlice";

const state = configureStore({
    reducer: {
        user: userSlice.reducer,
        organization: organizationSlice.reducer
    }
})

export default state;