import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecasts } from '../features/forecastSlice'
import { useCallback, useMemo } from 'react'
import { useSprings, animated } from 'react-spring'

import './css/Main.css'
import { NavLink } from 'react-router-dom'

function HomeMain() {
   const dispatch = useDispatch()
   const { forecasts, loading, error } = useSelector((state) => state.forecasts)
   const [recommendation, setRecommendation] = useState(null)

   const formatDate = useCallback((dateString) => {
      return dateString.slice(5, 10)
   }, [])

   const getMorningData = (forecastList) => {
      const morningData = forecastList.filter((forecast) => {
         const time = forecast.dt_txt.slice(11, 19)
         return time === '06:00:00'
      })
      return morningData
   }

   const morningForecasts = useMemo(() => {
      return forecasts && forecasts.list ? getMorningData(forecasts.list) : []
   }, [forecasts])

   const [styles, api] = useSprings(4, (index) => ({
      transform: 'scale(1)',
      from: { transform: 'scale(1)' },
      reset: true,
   }))

   const handleMouseOver = (index) => {
      api.start((i) => ({
         transform: i === index ? 'scale(1.1)' : 'scale(1)',
      }))
   }

   const handleMouseOut = () => {
      api.start((i) => ({
         transform: 'scale(1)',
      }))
   }

   useEffect(() => {
      dispatch(fetchForecasts('incheon'))
   }, [dispatch])

   useEffect(() => {
      if (forecasts && forecasts.list && forecasts.list.length > 0) {
         const temp = forecasts.list[0].main.temp // 첫 번째 날의 기온을 가져옴
         const selectedRecommendation = recommendations.find((item) => temp <= item.temp)
         setRecommendation(selectedRecommendation)
      }
   }, [forecasts])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   const recommendations = [
      { temp: 4, image: '/images/패딩.png', message: '오늘 날씨엔 패딩을 추천합니다' },
      { temp: 8, image: '/images/니트.png', message: '오늘 날씨엔 니트를 추천합니다' },
      { temp: 11, image: '/images/코트.png', message: '오늘 날씨엔 코트를 추천합니다' },
      { temp: 16, image: '/images/자켓.png', message: '오늘 날씨엔 자켓을 추천합니다' },
      { temp: 19, image: '/images/맨투맨.png', message: '오늘 날씨엔 맨투맨을 추천합니다' },
      { temp: 22, image: '/images/긴팔.png', message: '오늘 날씨엔 긴팔을 추천합니다' },
      { temp: 27, image: '/images/반팔.png', message: '오늘 날씨엔 반팔을 추천합니다' },
      { temp: 28, image: '/images/민소매.png', message: '오늘 날씨엔 민소매를 추천합니다' },
   ]

   return (
      <main>
         <div className="cardwrap">
            <animated.div style={styles[0]} onMouseOver={() => handleMouseOver(0)} onMouseOut={handleMouseOut}>
               <NavLink to="/today" style={{ textDecoration: 'none' }}>
                  {forecasts && (
                     <div className="card">
                        <p className="maintext">오늘의 인천 날씨</p>
                        <div className="todaycard">
                           <img src={`https://openweathermap.org/img/wn/${forecasts.list[0].weather[0].icon}@4x.png`} alt="날씨 아이콘" width="300" />
                           <div className="icontext">
                              {forecasts.list[0].main.temp.toFixed(1)}°C
                              <br />
                              {forecasts.list[0].weather[0].description}
                           </div>
                        </div>
                     </div>
                  )}
               </NavLink>
            </animated.div>

            <animated.div style={styles[1]} onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
               <NavLink to="/weather" style={{ textDecoration: 'none' }}>
                  <div className="card">
                     <p className="maintext">일기 예보</p>
                     <div className="forecastcard">
                        {morningForecasts.length > 0 ? (
                           morningForecasts.map((forecast, index) => {
                              const formattedDate = formatDate(forecast.dt_txt)

                              return (
                                 <div key={index} className="mainforecast">
                                    <div className="mainforecastdate">
                                       <p>날짜</p>
                                       <p>{formattedDate}</p>
                                    </div>
                                    <img src={`https://openweathermap.org/img/wn/${forecast.weather[0]?.icon}.png`} alt="날씨 아이콘" style={{ marginRight: '10px' }} />
                                    <p>
                                       온도 : {forecast.main.temp.toFixed(1)}°C &nbsp; / &nbsp; 날씨 : {forecast.weather[0]?.description}
                                    </p>
                                 </div>
                              )
                           })
                        ) : (
                           <p>날씨 데이터가 없습니다.</p>
                        )}
                     </div>
                  </div>
               </NavLink>
            </animated.div>
         </div>

         <div className="cardwrap">
            <animated.div style={styles[2]} onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>
               <NavLink to="/wear" style={{ textDecoration: 'none' }}>
                  <div className="card">
                     <p className="maintext">기온별 옷차림</p>
                     {recommendation && (
                        <div className="weatherrecommend">
                           <img src={recommendation.image} alt="추천 옷" width="200" />
                           <p>{recommendation.message}</p>
                        </div>
                     )}
                  </div>
               </NavLink>
            </animated.div>

            <animated.div style={styles[3]} onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>
               <NavLink to="/news" style={{ textDecoration: 'none' }}>
                  <div className="card">
                     <p className="maintext">WHAT'S NEW</p>
                     <p className="newsheader newstext">2024년 단풍 개화 예상 시기</p>
                     <p className="newsheader newstext">2024년 봄꽃 개화 예상 시기</p>
                     <p className="newsheader newstext">2023년 단풍 개화 예상 시기</p>
                     <p className="newsheader newstext">2023년 봄꽃 개화 예상 시기</p>
                     <p className="newstext">2022년 단풍 개화 예상 시기</p>
                  </div>
               </NavLink>
            </animated.div>
         </div>
      </main>
   )
}

export default HomeMain
