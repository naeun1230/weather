import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getForecasts } from '../api/weatherApi'

export const fetchForecasts = createAsyncThunk('forecast/fetchForecasts', async (q) => {
   const response = await getForecasts(q)
   return response.data
})

const forecastSlice = createSlice({
   name: 'forecasts',
   initialState: {
      loading: false,
      forecasts: null,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchForecasts.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchForecasts.fulfilled, (state, action) => {
            state.loading = false
            state.forecasts = action.payload
         })
         .addCase(fetchForecasts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default forecastSlice.reducer
