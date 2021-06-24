import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalOpen : false,
    bookingInfo : {}
}


const bookTeacherSlice = createSlice({
    name : 'book-teacher',
    initialState : initialState,
    reducers : {
        closeModal( state, action){
            state.isModalOpen = false;
        },

        openModal( state, action ){
            const info = {...action.payload.course,...action.payload.info}
            state.bookingInfo = info;
            state.isModalOpen = true;
        },
    }
});

export const bookTeacherActions = bookTeacherSlice.actions;

export default bookTeacherSlice;