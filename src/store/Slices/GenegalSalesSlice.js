import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  salesList: [],
};

export const getSales = createAsyncThunk(
  "salesList/getSales",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.get("http://vindev.cx.ua/dashboard");
      const list = result.data.general_sales_time;
      dispatch(setSales(list));
      console.log(list);
    } catch (error) {
      console.error("Error:", error);
      rejectWithValue(error.message);
    }
  }
);

export const GenegalSalesSlice = createSlice({
  name: "salesList",
  initialState,
  reducers: {
    setSales: (state, action) => {
      state.salesList = action.payload;
    },
  },
});

export const { setSales } = GenegalSalesSlice.actions;

export default GenegalSalesSlice.reducer;
