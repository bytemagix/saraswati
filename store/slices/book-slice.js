import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  categories: [],
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
    setCategories(state, action) {
      state.categories = action.payload;
    },
    toogleCategory(state, action) {
      const catFilterIndex = state.categories.findIndex(
        (item) => item.catId === action.payload.id
      );
      state.categories[catFilterIndex].selected =
        !state.categories[catFilterIndex].selected;

      
    },
  },
});

export const booksActions = bookSlice.actions;
export default bookSlice;
