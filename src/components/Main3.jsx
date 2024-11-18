import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecasts } from '../features/forecastSlice'

import './css/Main2.css'

function Main3() {
   const dispatch = useDispatch()
   const { forecasts, loading, error } = useSelector((state) => state.forecasts)

   useEffect(() => {
      dispatch(fetchForecasts('incheon'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   const date = new Date()
   const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']

   const twoDaysLater = new Date(date)
   twoDaysLater.setDate(date.getDate() + 2)

   const threeDaysLater = new Date(date)
   threeDaysLater.setDate(date.getDate() + 3)

   const fourDaysLater = new Date(date)
   fourDaysLater.setDate(date.getDate() + 4)

   const dayMessage2 = daysOfWeek[twoDaysLater.getDay()]
   const dayMessage3 = daysOfWeek[threeDaysLater.getDay()]
   const dayMessage4 = daysOfWeek[fourDaysLater.getDay()]

   return (
      <main>
         <div className="content">
            <p className="maintext">일기 예보</p>
            <div className="weatherforecastwrap">
               {forecasts && (
                  <div className="weatherforecast weatherforecastbackground">
                     <div className="weatherforecastdate">
                        <p style={{ margin: '0 0 0 30px' }}>오늘</p>
                        <p style={{ margin: '0 0 0 30px' }}>
                           {date.getMonth() + 1}.{date.getDate()}
                        </p>
                     </div>
                     <img src={`https://openweathermap.org/img/wn/${forecasts.list[0].weather[0].icon}@2x.png`} alt="날씨 아이콘" />
                     온도 : {forecasts.list[0].main.temp}°C / 체감 온도 : {forecasts.list[0].main.feels_like}°C / 날씨 : {forecasts.list[0].weather[0].description} / 바람(m/s) : {forecasts.list[0].wind.speed} / 습도(%) : {forecasts.list[0].main.humidity}
                  </div>
               )}
               {forecasts && (
                  <div className="weatherforecast weatherforecastbackground">
                     <div className="weatherforecastdate">
                        <p style={{ margin: '0 0 0 30px' }}>내일</p>
                        <p style={{ margin: '0 0 0 30px' }}>
                           {date.getMonth() + 1}.{date.getDate() + 1}
                        </p>
                     </div>
                     <img src={`https://openweathermap.org/img/wn/${forecasts.list[1].weather[0].icon}@2x.png`} alt="날씨 아이콘" />
                     온도 : {forecasts.list[1].main.temp}°C / 체감 온도 : {forecasts.list[1].main.feels_like}°C / 날씨 : {forecasts.list[1].weather[0].description} / 바람(m/s) : {forecasts.list[1].wind.speed} / 습도(%) : {forecasts.list[1].main.humidity}
                  </div>
               )}
               {forecasts && (
                  <div className="weatherforecast weatherforecastbackground">
                     <div className="weatherforecastdate">
                        <p style={{ margin: '0 0 0 30px' }}>{dayMessage2}</p>
                        <p style={{ margin: '0 0 0 30px' }}>
                           {date.getMonth() + 1}.{date.getDate() + 2}
                        </p>
                     </div>
                     <img src={`https://openweathermap.org/img/wn/${forecasts.list[2].weather[0].icon}@2x.png`} alt="날씨 아이콘" />
                     온도 : {forecasts.list[2].main.temp}°C / 체감 온도 : {forecasts.list[2].main.feels_like}°C / 날씨 : {forecasts.list[2].weather[0].description} / 바람(m/s) : {forecasts.list[2].wind.speed} / 습도(%) : {forecasts.list[2].main.humidity}
                  </div>
               )}
               {forecasts && (
                  <div className="weatherforecast weatherforecastbackground">
                     <div className="weatherforecastdate">
                        <p style={{ margin: '0 0 0 30px' }}>{dayMessage3}</p>
                        <p style={{ margin: '0 0 0 30px' }}>
                           {date.getMonth() + 1}.{date.getDate() + 3}
                        </p>
                     </div>
                     <img src={`https://openweathermap.org/img/wn/${forecasts.list[3].weather[0].icon}@2x.png`} alt="날씨 아이콘" />
                     온도 : {forecasts.list[2].main.temp}°C / 체감 온도 : {forecasts.list[3].main.feels_like}°C / 날씨 : {forecasts.list[3].weather[0].description} / 바람(m/s) : {forecasts.list[3].wind.speed} / 습도(%) : {forecasts.list[3].main.humidity}
                  </div>
               )}
               {forecasts && (
                  <div className="weatherforecast weatherforecastbackground">
                     <div className="weatherforecastdate">
                        <p style={{ margin: '0 0 0 30px' }}>{dayMessage4}</p>
                        <p style={{ margin: '0 0 0 30px' }}>
                           {date.getMonth() + 1}.{date.getDate() + 4}
                        </p>
                     </div>
                     <img src={`https://openweathermap.org/img/wn/${forecasts.list[4].weather[0].icon}@2x.png`} alt="날씨 아이콘" />
                     온도 : {forecasts.list[4].main.temp}°C / 체감 온도 : {forecasts.list[4].main.feels_like}°C / 날씨 : {forecasts.list[4].weather[0].description} / 바람(m/s) : {forecasts.list[4].wind.speed} / 습도(%) : {forecasts.list[4].main.humidity}
                  </div>
               )}
            </div>
         </div>
      </main>
   )
}

export default Main3
