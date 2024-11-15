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
                        {weathers.weather[0].description}
                     </div>
                  </DemoPaper>
               )}
               {weathers && (
                  <DemoPaper square={false}>
                     <p className="maintext">일기 예보</p>
                     <hr />
                     <ul>
                        <li></li>
                        <li>
                           <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}.png`} alt="날씨 아이콘" />
                        </li>
                        <li>
                           {weathers.main.temp}°C / {weathers.weather[0].description}
                        </li>
                     </ul>
                  </DemoPaper>
               )}
            </Stack>
            <Stack direction="row" spacing={2} style={{ marginTop: 30, marginLeft: 220 }}>
               <DemoPaper square={false}>
                  <p className="maintext">기온별 옷차림</p>
                  <hr />
               </DemoPaper>
               <DemoPaper square={false}>
                  <p className="maintext">WHAT'S NEW</p>
                  <hr />
               </DemoPaper>
            </Stack>
         </div>
      </main>
   )
}

export default Main
