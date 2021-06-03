import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartModalOpen : false,
    cart : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        cartModalOpen(state,action){
            state.isCartModalOpen = true
        },
        cartModalClose(state,action){
            state.isCartModalOpen = false;
        },
        addItem(state, action){
            console.log("item Added");
            console.log(action.payload);
            state.cart.push(action.payload);
        },
        removeItem(state, action){

        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;