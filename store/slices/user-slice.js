import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    authInfo : {
        isAuthenticated : false,
        emailId : null,
        localId : null
    },
    profileInfo : {

    },
    cart : {
        cartItems : [],
        totalPrice : 0
    },
    isCheckoutModalOpen : false,
    isCartModalOpen : false,
    bookHomeTutorInfo : {},
    downloadableBooks : [],
}

const userSlice = createSlice({
    name : 'user-slice',
    initialState : initialState,
    reducers : {
        login(state,action){
            state.authInfo = {
                isAuthenticated : true,
                emailId : action.payload.emailId,
                localId : action.payload.localId
            }
        },
        logout(state,action){
            state.authInfo = {
                isAuthenticated : false,
                emailId : null,
                localId : null
            }
        },
        addToCart(state,action){
            const item = state.cart.cartItems.find(item => item.bookId === action.payload.bookId);
            if(!item){
                state.cart.cartItems.push(action.payload);
                state.cart.totalPrice = state.cart.totalPrice + (+action.payload.price);
            }
        },
        buyNow(state,action){
            state.cart.cartItems = [action.payload];
            state.cart.totalPrice = (+action.payload.price);
            state.isCheckoutModalOpen = true;
        },
        removeItemFromCart(state,action){

        },
        removeAllFromCart(state,action){
            state.cart = {
                cartItems : [],
                totalPrice : 0
            }
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
        },
        setDownloadableBooks(state,action){
            state.downloadableBooks = action.payload;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;