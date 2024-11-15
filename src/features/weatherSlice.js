import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeathers } from '../api/weatherApi'

export const fetchWeathers = createAsyncThunk('weather/fetchWeathers', async (q) => {
   const response = await getWeathers(q)
   return response.data
})

const weatherSlice = createSlice({
   name: 'weathers',
   initialState: {
      loading: false,
      weathers: null,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeathers.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchWeathers.fulfilled, (state, action) => {
            state.loading = false
            state.weathers = action.payload
         })
         .addCase(fetchWeathers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
