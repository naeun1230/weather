import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecasts } from '../features/forecastSlice'

import './css/Main.css'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'

const DemoPaper = styled(Paper)(({ theme }) => ({
   width: 650,
   height: 280,
   padding: theme.spacing(4),
   ...theme.typography.body2,
}))

function Main() {
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

   const dayMessage = daysOfWeek[twoDaysLater.getDay()]

   // weathers 가 null이면
   if (!forecasts) {
      return
   } else {
      const temperature = forecasts.list[0].main.temp
      var weatherImage = ''
      var recommendationMessage = ''

      if (temperature <= 4) {
         weatherImage = <img src="/images/패딩.png" alt="패딩" width="200px" />
         recommendationMessage = '오늘 날씨엔 패딩을 추천합니다'
      } else if (temperature <= 8) {
         weatherImage = <img src="/images/니트.png" alt="니트" width="200px" />
         recommendationMessage = '오늘 날씨엔 니트를 추천합니다'
      } else if (temperature <= 11) {
         weatherImage = <img src="/images/코트.png" alt="코트" width="200px" />
         recommendationMessage = '오늘 날씨엔 코트를 추천합니다'
      } else if (temperature <= 16) {
         weatherImage = <img src="/images/자켓.png" alt="자켓" width="200px" />
         recommendationMessage = '오늘 날씨엔 자켓을 추천합니다'
      } else if (temperature <= 19) {
         weatherImage = <img src="/images/맨투맨.png" alt="맨투맨" width="200px" />
         recommendationMessage = '오늘 날씨엔 맨투맨을 추천합니다'
      } else if (temperature <= 22) {
         weatherImage = <img src="/images/긴팔.png" alt="긴팔" width="200px" />
         recommendationMessage = '오늘 날씨엔 긴팔을 추천합니다'
      } else if (temperature <= 27) {
         weatherImage = <img src="/images/반팔.png" alt="반팔" width="200px" />
         recommendationMessage = '오늘 날씨엔 반팔을 추천합니다'
      } else if (temperature <= 28) {
         weatherImage = <img src="/images/민소매.png" alt="민소매" width="200px" />
         recommendationMessage = '오늘 날씨엔 민소매를 추천합니다'
      }
   }

   return (
      <main>
         <div className="card">
            <Stack direction="row" spacing={2} style={{ marginTop: 30, marginLeft: 220 }}>
               <NavLink to="/today" style={{ textDecoration: 'none' }}>
                  {forecasts && (
                     <DemoPaper square={false}>
                        <p className="maintext" style={{ margin: 0, padding: 0 }}>
                           오늘의 날씨
                        </p>
                        <div className="icon">
                           <img src={`https://openweathermap.org/img/wn/${forecasts.list[0].weather[0].icon}@4x.png`} alt="날씨 아이콘" />
                        </div>
                        <div className="icontext">
                           {forecasts.list[0].main.temp}°C
                           <br />
                           {forecasts.list[0].weather[0].description}
                        </div>
                     </DemoPaper>
                  )}
               </NavLink>
               <NavLink to="/weather" style={{ textDecoration: 'none' }}>
                  {forecasts && (
                     <DemoPaper square={false}>
                        <p className="maintext" style={{ margin: 0 }}>
                           일기 예보
                        </p>
                        <div>
                           <div className="weatherforecast">
                              <div className="weatherforecastdate">
                                 <p style={{ margin: 0 }}>오늘</p>
                                 <p style={{ margin: 0 }}>
                                    {date.getMonth() + 1}.{date.getDate()}
                                 </p>
                              </div>
                              <img src={`https://openweathermap.org/img/wn/${forecasts.list[0].weather[0].icon}.png`} alt="날씨 아이콘" style={{ margin: '0px 20px' }} />
                              {forecasts.list[0].main.temp}°C / {forecasts.list[0].weather[0].description}
                           </div>

                           <div className="weatherforecast">
                              <div className="weatherforecastdate">
                                 <p style={{ margin: 0 }}>내일</p>
                                 <p style={{ margin: 0 }}>
                                    {date.getMonth() + 1}.{date.getDate() + 1}
                                 </p>
                              </div>
                              <img src={`https://openweathermap.org/img/wn/${forecasts.list[1].weather[0].icon}.png`} alt="날씨 아이콘" style={{ margin: '0px 20px' }} />
                              {forecasts.list[1].main.temp}°C / {forecasts.list[1].weather[0].description}
                           </div>
                           <div className="weatherforecast">
                              <p className="weatherforecastdate">
                                 <p style={{ margin: 0 }}>{dayMessage}</p>
                                 <p style={{ margin: 0 }}>
                                    {date.getMonth() + 1}.{date.getDate() + 2}
                                 </p>
                              </p>
                              <img src={`https://openweathermap.org/img/wn/${forecasts.list[2].weather[0].icon}.png`} alt="날씨 아이콘" style={{ margin: '0px 20px' }} />
                              {forecasts.list[2].main.temp}°C / {forecasts.list[2].weather[0].description}
                           </div>
                        </div>
                     </DemoPaper>
                  )}
               </NavLink>
            </Stack>
            <Stack direction="row" spacing={2} style={{ marginTop: 30, marginLeft: 220 }}>
               <NavLink to="/wear" style={{ textDecoration: 'none' }}>
                  <DemoPaper square={false}>
                     <p className="maintext" style={{ margin: 0 }}>
                        기온별 옷차림
                     </p>
                     <div className="weatherrecommend">
                        <div className="weatherImage"> {weatherImage}</div>
                        <p className="recommendationMessage">{recommendationMessage}</p>
                     </div>
                  </DemoPaper>
               </NavLink>
               <NavLink to="/news" style={{ textDecoration: 'none' }}>
                  <DemoPaper square={false}>
                     <p className="maintext" style={{ margin: 0 }}>
                        WHAT'S NEW
                     </p>
                     <p className="newsheader newstext">2024년 단풍 개화 예상 시기</p>
                     <p className="newsheader newstext">2024년 벚꽃 개화 예상 시기</p>
                     <p className="newsheader newstext">2024년 봄꽃 개화 예상 시기</p>
                     <p className="newsheader newstext">2023년 단풍 개화 예상 시기</p>
                     <p className="newstext">2023년 벚꽃 개화 예상 시기</p>
                  </DemoPaper>
               </NavLink>
            </Stack>
         </div>
      </main>
   )
}

export default Main
