import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAdminLoggedIn : false,
    subjects : []
}

const adminSlice = createSlice({
    name : 'admin',
    initialState : initialState,
    reducers : {
        login(state, action){
            state.isAdminLoggedIn = true;
        },
        logout(state,action){
            state.isAdminLoggedIn = false;
        },
        setSubjects(state,action){
            state.subjects = action.payload
        }
    }
});

export const adminActions = adminSlice.actions;

export default adminSlice;