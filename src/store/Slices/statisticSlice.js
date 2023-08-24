import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  statisticList: {},
};

export const getStatistic = createAsyncThunk(
  "statisticList/getStatistic",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.get("http://vindev.cx.ua/dashboard");
      const sss = result.data
      const list = result.data.statistic;
      dispatch(setStatistic(list));
      console.log(sss);
    } catch (error) {
      console.error("Error:", error);
      rejectWithValue(error.message);
    }
  }
);

export const StatisticSlice = createSlice({
  name: "statisticList",
  initialState,
  reducers: {
    setStatistic: (state, action) => {
      state.statisticList = action.payload;
    },
    
  },
});

export const { setStatistic } = StatisticSlice.actions;

export default StatisticSlice.reducer;
