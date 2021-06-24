import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    authInfo : {
        isAuthenticated : false,
        localId : null
    },
    profileInfo : {

    },
    cartItems : [],
    isCheckoutModalOpen : false,
    isCartModalOpen : false,
    bookHomeTutorInfo : {}
}

const userSlice = createSlice({
    name : 'user-slice',
    initialState : initialState,
    reducers : {
        login(state,action){

        },
        logout(state,action){

        },
        addToCart(state,action){
            const item = state.cartItems.find(item => item.bookId === action.payload.bookId);
            if(!item){
                state.cartItems.push(action.payload);
            }
        },
        buyNow(state,action){
            console.log(action.payload);
            state.cartItems = [action.payload];
            state.isCheckoutModalOpen = true;
        },
        removeItemFromCart(state,action){

        },
        removeAllFromCart(state,action){
            state.cartItems = []
        },
        closeCheckoutModal(state,action){
            state.isCheckoutModalOpen = false;
        },
        openCartModal(state,action){
            state.isCartModalOpen = true;
        },
        closeCartModal(state,action){
            state.isCartModalOpen = false;
        },
        setBookHomeTutorInfo(state,action){
            const info = {...action.payload.course,...action.payload.info}
            state.bookHomeTutorInfo = info;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;