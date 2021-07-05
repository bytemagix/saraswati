import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const onlineClassSlice = createSlice({
    name : "online-class-slice",
    initialState : initialState,
    reducers : {
        setCourses(state,action){
          state.courses = action.payload;
        }
    }
});

export const onlineClassActions = onlineClassSlice.actions;
export default onlineClassSlice; 