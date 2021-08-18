import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authInfo: {
    isAuthenticated: false,
    emailId: null,
    localId: null,
  },
};

const homeTutorUserSlice = createSlice({
  name: "home-tutor-user-slice",
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

export const homeTutorUserActions = homeTutorUserSlice.actions;
export default homeTutorUserSlice;