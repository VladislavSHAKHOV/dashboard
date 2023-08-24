import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    chartList: [],
};

export const getChartData = createAsyncThunk(
  "chartList/getChartData",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.get("http://vindev.cx.ua/dashboard");
      const list = result.data.chartData;
      dispatch(setChartData(list));
      console.log(list);
    } catch (error) {
      console.error("Error:", error);
      rejectWithValue(error.message);
    }
  }
);

export const chartDataSlice = createSlice({
  name: "chartList",
  initialState,
  reducers: {
    setChartData: (state, action) => {
      state.chartList = action.payload;
    },
    
  },
});

export const { setChartData } = chartDataSlice.actions;

export default chartDataSlice.reducer;