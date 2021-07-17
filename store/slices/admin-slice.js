import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authInfo: {
    isAuthenticated: false,
    token : null
  },
};

const adminSlice = createSlice({
  name: "admin-slice",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.authInfo = {
        isAuthenticated: true,
        token : action.payload
      };
    },
    logout(state, action) {
      state.authInfo = {
        isAuthenticated: false,
        token: null,
      };
    },
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice;
