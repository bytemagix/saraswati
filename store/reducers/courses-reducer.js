import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses : []
}

const courseSlice = createSlice({
    name : 'course-slice',
    initialState : initialState,
    reducers : {
        setCourses(state,action){
            state.courses = action.payload;
        }
    }
});

export const courseActions = courseSlice.actions;
export default courseSlice;