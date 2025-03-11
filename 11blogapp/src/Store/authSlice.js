import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload; // payload is the user data that we get from the server after successful login
        },
        logout: (state) => {
            state.status= false;
            state.userData=null
        }
    }
})

export const {login ,logout} = authSlice.actions;
export default authSlice.reducer;