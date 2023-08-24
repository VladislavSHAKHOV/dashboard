import { configureStore } from '@reduxjs/toolkit'
import  chartDataSlice  from './Slices/chartDataSlice'
import GenegalSalesSlice from './Slices/GenegalSalesSlice'
import statisticSlice from './Slices/statisticSlice'
import usersSlice from './Slices/usersSlice'


export const store = configureStore({
    reducer: {
        statisticList: statisticSlice,
        chartList: chartDataSlice,
        usersList: usersSlice,
        salesList: GenegalSalesSlice,
    }
})

