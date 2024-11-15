import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weatherSlice'

const store = configureStore({
   reducer: {
      todays: weatherReducer,
   },
})

export default store
