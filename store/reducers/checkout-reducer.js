import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalOpen : false,
    item : {}
}


const checkoutSlice = createSlice({
    name : 'checkout',
    initialState : initialState,
    reducers : {
        closeModal( state, action){
            state.isModalOpen = false;
        },

        openModal( state, action ){
            state.item = action.payload
            state.isModalOpen = true;
        }
    }
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice;