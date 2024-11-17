import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers } from '../features/weatherSlice'

import './css/Main.css'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const DemoPaper = styled(Paper)(({ theme }) => ({
   width: 650,
   height: 280,
   padding: theme.spacing(4),
   ...theme.typography.body2,
}))

function Main() {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchWeathers('incheon'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   const date = new Date()
   const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

   const twoDaysLater = new Date(date)
   twoDaysLater.setDate(date.getDate() + 2)

   const dayMessage = daysOfWeek[twoDaysLater.getDay()]

   const temperature = weathers.main.temp
   let weatherImage
   let recommendationMessage

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

   return (
      <main>
         <div className="card">
            <Stack direction="row" spacing={2} style={{ marginTop: 30, marginLeft: 220 }}>
               {weathers && (
                  <DemoPaper square={false}>
                     <p className="maintext">오늘의 날씨</p>
                     <hr />
                     <div className="icon">
                        <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}@4x.png`} alt="날씨 아이콘" />
                     </div>
                     <div className="icontext">
                        {weathers.main.temp}°C
                        <br />
                        {weathers.weather[0].description}
                     </div>
                  </DemoPaper>
               )}
               {weathers && (
                  <DemoPaper square={false}>
                     <p className="maintext">일기 예보</p>
                     <hr />
                     <div>
                        <div className="weatherforecast">
                           <p>
                              오늘
                              {date.getMonth() + 1}.{date.getDate()}
                           </p>
                           <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}.png`} alt="날씨 아이콘" />
                           {weathers.main.temp}°C / {weathers.weather[0].description}
                        </div>

                        <div className="weatherforecast">
                           <p style={{ fontSize: '20px', display: 'flex' }}>
                              내일
                              {date.getMonth() + 1}.{date.getDate() + 1}
                           </p>
                           <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}.png`} alt="날씨 아이콘" />
                           {weathers.main.temp}°C / {weathers.weather[0].description}
                        </div>

                        <div className="weatherforecast">
                           <p>
                              {dayMessage}
                              {date.getMonth() + 1}.{date.getDate() + 2}
                           </p>
                           <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}.png`} alt="날씨 아이콘" />
                           {weathers.main.temp}°C / {weathers.weather[0].description}
                        </div>
                     </div>
                  </DemoPaper>
               )}
            </Stack>
            <Stack direction="row" spacing={2} style={{ marginTop: 30, marginLeft: 220 }}>
               <DemoPaper square={false}>
                  <p className="maintext">기온별 옷차림</p>
                  <hr />
                  <div className="weatherrecommend">
                     <div className="weatherImage"> {weatherImage}</div>
                     <p className="recommendationMessage">{recommendationMessage}</p>
                  </div>
               </DemoPaper>
               <DemoPaper square={false}>
                  <p className="maintext">WHAT'S NEW</p>
                  <hr />
                  <p className="newsheader newstext">2024년 단풍 개화 예상 시기</p>
                  <p className="newsheader newstext">2024년 벚꽃 개화 예상 시기</p>
                  <p className="newsheader newstext">2024년 봄꽃 개화 예상 시기</p>
                  <p className="newsheader newstext">2023년 단풍 개화 예상 시기</p>
                  <p className="newstext">2023년 벚꽃 개화 예상 시기</p>
               </DemoPaper>
            </Stack>
         </div>
      </main>
   )
}

export default Main
