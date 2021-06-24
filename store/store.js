import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './slices/book-slice';
import adminSlice from './reducers/admin-reducer';
import teachersSlice from './reducers/teacher-profile-reducer';
import bookTeacherSlice from './reducers/book-teacher-reducer';
import courseSlice from './reducers/courses-reducer';
import teacherAuthSlice from './reducers/teacher-auth';
import userSlice from './slices/user-slice';
import homeTutorSlice from './slices/home-tutor-slice';
import onlineClassSlice from './slices/online-class-slice';

const store = configureStore({
    reducer : {
        bookSlice : bookSlice.reducer,
        userSlice : userSlice.reducer,
        homeTutorSlice : homeTutorSlice.reducer,
        onlineClassSlice : onlineClassSlice.reducer,

        adminReducer : adminSlice.reducer,
        teacherReducer : teachersSlice.reducer,
        bookTeacherReducer : bookTeacherSlice.reducer,
        courseReducer : courseSlice.reducer,
        teacherAuthReducer : teacherAuthSlice.reducer 
    }
});

export default store;