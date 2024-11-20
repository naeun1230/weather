import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecasts } from '../features/forecastSlice'

import './css/Main.css'

function WeatherMain() {
   const dispatch = useDispatch()
   const { forecasts, loading, error } = useSelector((state) => state.forecasts)

   const formatDate = (dateString) => {
      return dateString.slice(5, 10) // "11-19"
   }

   const getMorningData = (forecastList) => {
      const morningData = forecastList.filter((forecast) => {
         const time = forecast.dt_txt.slice(11, 19)
         return time === '06:00:00'
      })
      return morningData
   }

   // 데이터 로드 및 필터링
   useEffect(() => {
      dispatch(fetchForecasts('incheon'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   // forecasts가 없거나 list가 없을 경우를 처리
   if (!forecasts || !forecasts.list) {
      return <p>일기 예보를 불러오는 중입니다...</p>
   }

   const morningForecasts = getMorningData(forecasts.list)

   return (
      <main>
         <div className="contentwrap">
            <p className="contentheader">일기 예보</p>
            {morningForecasts.map((forecast, index) => {
               const formattedDate = formatDate(forecast.dt_txt)
               return (
                  <div key={index} className="forecastcontent">
                     <div className="forecastdate">
                        <p>날짜</p>
                        <p>{formattedDate}</p>
                     </div>
                     <img src={`https://openweathermap.org/img/wn/${forecast.weather[0]?.icon}@2x.png`} alt="날씨 아이콘" />
                     <p>
                        온도 : {forecast.main?.temp.toFixed(1)}°C &nbsp; / &nbsp; 체감 온도 : {forecast.main?.feels_like.toFixed(1)}°C &nbsp; / &nbsp; 날씨 : {forecast.weather[0]?.description} &nbsp; / &nbsp; 바람(m/s) : {forecast.wind.speed.toFixed(2)} &nbsp; / &nbsp; 습도(%) :{' '}
                        {forecast.main.humidity}
                     </p>
                  </div>
               )
            })}
         </div>
      </main>
   )
}

export default WeatherMain
