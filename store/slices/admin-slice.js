import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authInfo: {
    isAuthenticated: false,
    emailId: null,
    localId: null,
  },
};

const adminSlice = createSlice({
  name: "admin-slice",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.authInfo = {
        isAuthenticated: true,
        emailId: action.payload.emailId,
        localId: action.payload.localId,
      };
    },
    logout(state, action) {
      state.authInfo = {
        isAuthenticated: false,
        emailId: null,
        localId: null,
      };
    },
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice;
