// creatSlice is a function that accepts an initial state, an object of reducer functions and a slice name.
// It then automatically generates action creators and action types that correspond to the reducers and state.
import { createSlice } from "@reduxjs/toolkit";

// Get user from local storage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null, // If there is a user in local storage, use that. otherwise null
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = ";";
    },
  },
  extraReducers: () => {}, // extraReducers allows createSlice to respond to other action types besides the types it has generated
});

export const { reset } = authSlice.actions; // reset has to be exported from actions as its a reducer object

export default authSlice.reducer;
