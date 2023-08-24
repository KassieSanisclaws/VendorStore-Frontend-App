import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    role: null,
    //Permissions (ACL)-AccessControlList approach is used
    permissions: ['read', 'write', 'delete', 'view-products', 'view-orders', 'view-users', "edit-products", "edit-orders", "edit-users", "delete-products", "delete-orders", "delete-users", "create-products", "create-orders", "create-users"],
    isLoading: false,
    error: null,
}

const developerSlice = createSlice({
    name: "developer",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.role = action.payload.role;
            state.isLoading = false;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.role = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = developerSlice.actions;

export default developerSlice.reducer;