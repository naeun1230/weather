import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecasts } from '../features/forecastSlice'

import './css/Main.css'

function WeatherMain() {
   const dispatch = useDispatch()
   const { forecasts, loading, error } = useSelector((state) => state.forecasts)

   const formatDate = (dateString) => {
      return dateString.slice(5, 10)
   }

   const getMorningData = (forecastList) => {
      return forecastList.filter((forecast) => forecast.dt_txt.slice(11, 19) === '06:00:00')
   }

   // `morningForecasts`는 `forecasts` 변경 시에만 재계산되도록 useMemo로 메모이제이션
   const morningForecasts = useMemo(() => {
      return forecasts?.list ? getMorningData(forecasts.list) : []
   }, [forecasts])

   useEffect(() => {
      dispatch(fetchForecasts('incheon'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <main>
         <div className="contentwrap">
            <p className="contentheader">일기 예보</p>
            {morningForecasts.map((forecast) => {
               const formattedDate = formatDate(forecast.dt_txt)
               const weather = forecast.weather[0] || {} // weather[0]이 없는 경우 빈 객체로 기본값 처리

               return (
                  <div key={forecast.dt_txt} className="forecastcontent">
                     <div className="forecastdate">
                        <p>날짜</p>
                        <p>{formattedDate}</p>
                     </div>
                     <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description || '날씨 아이콘'} />
                     <p>
                        온도 : {forecast.main?.temp.toFixed(1)}°C &nbsp; / &nbsp; 체감 온도 : {forecast.main?.feels_like.toFixed(1)}°C &nbsp; / &nbsp; 날씨 : {weather.description} &nbsp; / &nbsp; 바람(m/s) : {forecast.wind.speed.toFixed(2)} &nbsp; / &nbsp; 습도(%) : {forecast.main.humidity}
                     </p>
                  </div>
               )
            })}
         </div>
      </main>
   )
}

export default WeatherMain
