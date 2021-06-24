import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  subjects: [],
  filteredBooks: [],
};

const bookSlice = createSlice({
  name: "book-slice",
  initialState: initialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
      state.filteredBooks = action.payload;
    },
    setSubjects(state, action) {
      state.subjects = action.payload;
    },
    toogleSubject(state, action) {
      const subFilterIndex = state.subjects.findIndex(
        (item) => item.subId === action.payload.id
      );
      state.subjects[subFilterIndex].selected =
        !state.subjects[subFilterIndex].selected;

      
    },
  },
});

export const booksActions = bookSlice.actions;
export default bookSlice;
