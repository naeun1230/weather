import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers } from '../features/weatherSlice'

import './css/Main2.css'

function Main2() {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchWeathers('incheon'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>
   return (
      <main>
         <div className="content">
            <p className="maintext">오늘의 날씨</p>
            {weathers && <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}@4x.png`} alt="날씨 아이콘" width="600px" style={{ float: 'left' }} />}
            <div className="contenttext">
               {weathers && (
                  <div>
                     <p style={{ margin: 20 }}>기온 : {weathers.main.temp}°C</p>
                     <p style={{ margin: 20 }}>체감온도 : {weathers.main.feels_like}°C</p>
                     <p style={{ margin: 20 }}>날씨 : {weathers.weather[0].description}</p>
                     <p style={{ margin: 20 }}>바람(m/s) : {weathers.wind.speed}</p>
                     <p style={{ margin: 20 }}>습도(%) : {weathers.main.humidity}</p>
                  </div>
               )}
            </div>
         </div>
      </main>
   )
}

export default Main2
