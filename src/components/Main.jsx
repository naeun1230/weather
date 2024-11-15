import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodays } from '../features/weatherSlice'

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
   const { todays, loading, error } = useSelector((state) => state.todays)

   useEffect(() => {
      dispatch(fetchTodays('today'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <main>
         <div className="card">
            <Stack direction="row" spacing={2} style={{ marginTop: 30, marginLeft: 220 }}>
               <DemoPaper square={false}>
                  오늘의 날씨
                  <hr />
                  <div>
                     {todays.map((today) => (
                        <img src={`https://openweathermap.org/img/wn/${today.icon}@4x.png`} alt="날씨 아이콘" />
                     ))}
                  </div>
               </DemoPaper>
               <DemoPaper square={false}>
                  일기 예보
                  <hr />
               </DemoPaper>
            </Stack>
            <Stack direction="row" spacing={2} style={{ marginTop: 30, marginLeft: 220 }}>
               <DemoPaper square={false}>
                  기온별 옷차림
                  <hr />
               </DemoPaper>
               <DemoPaper square={false}>
                  WHAT'S NEW
                  <hr />
               </DemoPaper>
            </Stack>
         </div>
      </main>
   )
}

export default Main
