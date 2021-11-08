import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    createdOrderId : null,
}

const paymentSlice = createSlice({
    name : "payment-slice",
    initialState : initialState,
    reducers : {
        setOrderId(state, action){
            state.createdOrderId = action.payload
        }
    }
});

export const paymentActions = paymentSlice.actions
export default paymentSlice;