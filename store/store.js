import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './reducers/book-reducer';
import cartSlice from './reducers/cart-reducer';
import checkoutSlice from './reducers/checkout-reducer';

const store = configureStore({
    reducer : {
        bookReducer : bookSlice.reducer,
        cartReducer : cartSlice.reducer,
        checkoutReducer : checkoutSlice.reducer
    }
});

export default store;