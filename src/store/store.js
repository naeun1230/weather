import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weatherSlice'

const store = configureStore({
   reducer: {
      weathers: weatherReducer,
   },
})

export default store
