import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers } from '../features/weatherSlice'

import './css/Main.css'

function TodayMain() {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchWeathers('incheon'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>
   return (
      <main>
         <div className="contentwrap">
            <p className="contentheader">오늘의 인천 날씨</p>

            {weathers && (
               <div className="todaycontent">
                  <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}@4x.png`} style={{ float: 'left', margin: '0 100px' }} alt="날씨 아이콘" width="400px" />
                  <div className="todaytext">
                     <p>기온 : {weathers.main.temp}°C</p>
                     <p> 체감온도 : {weathers.main.feels_like}°C </p>
                     <p>날씨 : {weathers.weather[0].description}</p>
                     <p>바람(m/s) : {weathers.wind.speed}</p>
                     <p>습도(%) : {weathers.main.humidity}</p>
                  </div>
               </div>
            )}
         </div>
      </main>
   )
}

export default TodayMain
