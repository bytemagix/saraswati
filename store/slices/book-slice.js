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
      
        if(action.payload.type === "ADD_FILTER"){
          const toBeAddedBooks = state.books.filter(item => item.catId === action.payload.id);
          if(state.filteredBooks.length < state.books.length){
            state.filteredBooks = state.filteredBooks.concat(toBeAddedBooks);
          }else{
              state.filteredBooks = toBeAddedBooks;
          }
        }else{
          const toBeAddedBooks = state.filteredBooks.filter(item => item.catId !== action.payload.id);
          if(toBeAddedBooks.length === 0){
            state.filteredBooks = state.books;
          }else{
            state.filteredBooks = toBeAddedBooks;
          }
        }
    },
  },
});

export const booksActions = bookSlice.actions;
export default bookSlice;
