// createSlice is a function that accepts an initial state, an object of reducer functions and a slice name.
// It then automatically generates action creators and action types that correspond to the reducers and state.
// createAsyncThunk - A function that accepts a Redux action type string and a callback function that should return a promise.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from local storage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null, // If there is a user in local storage, use that. otherwise null
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error) {
    const message =
      // If any of this exists, it will be put into this variable
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message); // This will reject and send the error message as the payload
  }
});

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
