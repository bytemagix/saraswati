import { createSlice, current } from "@reduxjs/toolkit";

const booksStore = [
  {
    bookId : 'b1',
    title : "Maths",
    subject : 'Maths',
    subId : "s1",
    class : "Class 6",
    classId : "class 6",
    author : "M K Singh",
    price : 99,
    description : "A Must Read Book",
    image: "https://m.media-amazon.com/images/I/41zjd4HxaiL.jpg",
  },
  {
    bookId : 'b2',
    title : "Science",
    subject : 'Science',
    subId : "s2",
    class : "Class 8",
    classId : "class 8",
    author : "S K Jain",
    price : 129,
    description : "A Must Read Book",
    image: "https://5.imimg.com/data5/BZ/XI/WV/SELLER-28970007/class-8th-science-book-500x500.jpg",
  },
  {
    bookId : 'b3',
    title : "Geography",
    subject : 'Geography',
    subId : "s2",
    class : "Class 6",
    classId : "class 6",
    author : "P Das",
    price : 79,
    description : "A Must Read Book",
    image: "https://5.imimg.com/data5/FN/AD/MY-25628772/6th-class-geography-book-500x500.jpg",
  },
  {
    bookId : 'b4',
    title : "History",
    subject : 'History',
    subId : "s2",
    class : "Class 7",
    classId : "class 7",
    author : "P Das",
    price : 199,
    description : "A Must Read Book",
    image: "https://images-na.ssl-images-amazon.com/images/I/51NAVbHmeSL._SX373_BO1,204,203,200_.jpg",
  }
];

const initialState = {
  books: booksStore,

  subjects: [
    { subId: "s1", title: "Maths", selected: false },
    { subId: "s2", title: "Science", selected: false },
    { subId: "s3", title: "English", selected: false },
  ],

  classes: [
    { classId: "class 6", title: "Class 6", selected: false },
    { classId: "class 7", title: "Class 7", selected: false },
    { classId: "class 8", title: "Class 8", selected: false },
  ],

  filteredBooks : booksStore,
  filteredSubjectBooks : booksStore,
  filteredClassesBooks : booksStore,
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState: initialState,
  reducers: {
    addBook(state, action) {},
    removeBook(state, action) {},

    toogleSubject(state, action) {

      const subFilterIndex = state.subjects.findIndex(
        (item) => item.subId === action.payload.id
      );
      state.subjects[subFilterIndex].selected = !state.subjects[subFilterIndex].selected;

      if (action.payload.type === "ADD_FILTER") {

        let subFilter = [];

        if(state.filteredSubjectBooks.length === state.books.length){
          subFilter = state.books.filter(item => item.subId === action.payload.id);
        }else{
          subFilter = state.filteredSubjectBooks.filter(item => item.subId === action.payload.id);
        }

        state.filteredSubjectBooks = subFilter;

      } else {
        let filterCounter = 0;
        state.subjects.forEach(item => {
          if(item.selected){
            filterCounter++;
          }
        });

        if(filterCounter === 0){
          state.filteredSubjectBooks = state.books;
        }else{
          const subFilter = state.filteredSubjectBooks.filter(item => item.subId !== action.payload.id);
          state.filteredSubjectBooks = subFilter;
        }
      }

      const filtered = state.books.filter((book) => {
        const foundSub = state.filteredSubjectBooks.find((item) => item.subId === book.subId);
        const foundClass = state.filteredClassesBooks.find(item => item.classId === book.classId);

        if(foundSub && foundClass){
          return true;
        }else{
          return false;
        }
      })
      state.filteredBooks = filtered;
    },

    toogleClass(state, action) {

      const classFilterIndex = state.classes.findIndex(
        (item) => item.classId === action.payload.id
      );
      state.classes[classFilterIndex].selected = !state.classes[classFilterIndex].selected;

      if (action.payload.type === "ADD_FILTER") {
        console.log("Hello Class Toogle");

        let classFilter = [];

        if(state.filteredClassesBooks.length === state.books.length){
          console.log("Filter Length");
          classFilter = state.books.filter(item => item.classId === action.payload.id);
        }else{
          console.log("Add New Filter");
          const data = state.books.filter(item => item.classId === action.payload.id);
          classFilter = [...data,...state.filteredClassesBooks];
        }

        state.filteredClassesBooks = classFilter;

      } else {
        let filterCounter = 0;
        state.classes.forEach(item => {
          if(item.selected){
            filterCounter++;
          }
        });

        if(filterCounter === 0){
          state.filteredClassesBooks = state.books;
        }else{
          const classFilter = state.filteredClassesBooks.filter(item => item.classId !== action.payload.id);
          state.filteredClassesBooks = classFilter;
        }
      }

      const filtered = state.books.filter((book) => {
        const foundSub = state.filteredSubjectBooks.find((item) => item.subId === book.subId);
        const foundClass = state.filteredClassesBooks.find(item => item.classId === book.classId);

        if(foundSub && foundClass){
          return true;
        }else{
          return false;
        }
      })
      state.filteredBooks = filtered;
    },
  },
});

export const booksActions = bookSlice.actions;

export default bookSlice;
