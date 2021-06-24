import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [
    {
      courseId: "id1",
      title: "Engineering Physics",
      tutor: "B Nath",
      description: "Complete Engineering Physics Course",
    },
    {
        courseId: "id2",
        title: "Engineering Chemistry",
        tutor: "B Nath",
        description: "Complete Engineering Chemistry Course",
      }
  ],
};

const onlineClassSlice = createSlice({
    name : "online-class-slice",
    initialState : initialState,
    reducers : {
        setCourses(state,action){

        }
    }
});

export const onlineClassActions = onlineClassSlice.actions;
export default onlineClassSlice; 