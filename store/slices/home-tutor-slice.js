import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    homeTutors : [],
    filteredTutors : [],
    subjectFilters : [],
    cityFilters : [],
    selectedTutorCourses : [],
}

const homeTutorSlice = createSlice({
    name : 'home-tutor-slice',
    initialState : initialState,
    reducers : {
        setHomeTutors(state,action){
            state.homeTutors = action.payload;
        },
        setSelectedTutorCourses(state,action){
            state.selectedTutorCourses = action.payload
        }
    }
});

export const homeTutorActions = homeTutorSlice.actions;
export default homeTutorSlice;