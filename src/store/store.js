import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weatherSlice'
import forecastReducer from '../features/forecastSlice'

const store = configureStore({
   reducer: {
      weathers: weatherReducer,
      forecasts: forecastReducer,
   },
})

export default store
