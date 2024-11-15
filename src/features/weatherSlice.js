import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTodays } from '../api/weatherApi'

export const fetchTodays = createAsyncThunk('todays/fetchTodays', async (type) => {
   const response = await getTodays(type)
   return response.data
})

const weatherSlice = createSlice({
   name: 'todays',
   initialState: {
      loading: false,
      todays: [],
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchTodays.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchTodays.fulfilled, (state, action) => {
            state.loading = false
            state.todays = action.payload
         })
         .addCase(fetchTodays.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
