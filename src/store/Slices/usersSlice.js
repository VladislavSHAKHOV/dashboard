import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  usersList: {},
};

export const getUsers = createAsyncThunk(
  "usersList/getUsers",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.get("http://vindev.cx.ua/dashboard");
      const list = result.data.users;
      dispatch(setUsers(list));
    } catch (error) {
      console.error("Error:", error);
      rejectWithValue(error.message);
    }
  }
);

export const usersSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.usersList = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
