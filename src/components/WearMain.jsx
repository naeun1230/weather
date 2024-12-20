import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers } from '../features/weatherSlice'

import './css/Main.css'

function WearMain() {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.weathers)
   const [recommendation, setRecommendation] = useState(null)

   useEffect(() => {
      dispatch(fetchWeathers('incheon'))
   }, [dispatch])

   // 기온별 옷차림 추천 목록을 useMemo로 최적화
   const recommendations = useMemo(
      () => [
         { temp: 4, image: '/images/패딩.png', message: '패딩' },
         { temp: 8, image: '/images/니트.png', message: '니트' },
         { temp: 11, image: '/images/코트.png', message: '코트' },
         { temp: 16, image: '/images/자켓.png', message: '자켓' },
         { temp: 19, image: '/images/맨투맨.png', message: '맨투맨' },
         { temp: 22, image: '/images/긴팔.png', message: '긴팔' },
         { temp: 27, image: '/images/반팔.png', message: '반팔' },
         { temp: 28, image: '/images/민소매.png', message: '민소매' },
      ],
      []
   )

   useEffect(() => {
      if (weathers && weathers.main) {
         const temp = weathers.main.temp
         const selectedRecommendation = recommendations.find((item) => temp <= item.temp) || recommendations[recommendations.length - 1]
         setRecommendation(selectedRecommendation)
      }
   }, [weathers, recommendations])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <main>
         <div className="contentwrap">
            <p className="contentheader">기온별 옷차림</p>
            {recommendation && (
               <div className="wearcontent">
                  <img src={recommendation.image} alt="추천 옷" width="450px" />
                  <p>
                     오늘의 온도는 {weathers.main.temp.toFixed(1)}°C로
                     <br /> {recommendation.message} 입는 것을 추천합니다
                  </p>
               </div>
            )}
         </div>
      </main>
   )
}

export default WearMain
