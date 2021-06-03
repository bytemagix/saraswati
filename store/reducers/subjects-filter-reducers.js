import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjects: [
   { id : 's1' , title : 'English' , selected : false},
   { id : 's2' , title : 'Science' , selected : false},
   { id : 's3' , title : 'Maths' , selected : false}
  ],
};

const subjectsSlice = createSlice({
  name: "subjectsSlice",
  initialState: initialState,
  reducers: {
    toogleSubject(state, action) {},
    removeBook(state, action) {},
  },
});

export default subjectsSlice;