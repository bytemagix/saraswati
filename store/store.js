import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './slices/book-slice';
import userSlice from './slices/user-slice';
import homeTutorSlice from './slices/home-tutor-slice';
import onlineClassSlice from './slices/online-class-slice';
import paymentSlice from './slices/payment-slice';
import adminSlice from './slices/admin-slice';
import homeTutorUserSlice from './slices/home-tutor-user-slice';

const store = configureStore({
    reducer : {
        bookSlice : bookSlice.reducer,
        userSlice : userSlice.reducer,
        homeTutorSlice : homeTutorSlice.reducer,
        onlineClassSlice : onlineClassSlice.reducer,
        paymentSlice : paymentSlice.reducer,
        adminSlice : adminSlice.reducer,
        homeTutorUserSlice: homeTutorUserSlice.reducer,
    }
});

export default store;