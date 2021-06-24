import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teachers: [],
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: initialState,
  reducers: {
    addTeacher(state, action) {},
    setTeachers(state,action){
      state.teachers = action.payload
    }
  },
});

export const teachersActions = teachersSlice.actions;

export default teachersSlice;
