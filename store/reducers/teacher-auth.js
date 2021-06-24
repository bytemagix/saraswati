import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn : false,
    localId : null
}

const teacherAuthSlice = createSlice({
    name : 'teacher-auth',
    initialState : initialState,
    reducers : {
        login(state,action){
            state.isLoggedIn = true,
            state.localId = action.payload;
        }
    }
});

export const teacherAuthActions = teacherAuthSlice.actions;
export default teacherAuthSlice;