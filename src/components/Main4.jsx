import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers } from '../features/weatherSlice'

import './css/Main2.css'

function Main4() {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchWeathers('incheon'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   if (!weathers) {
      return
   } else {
      const temperature = weathers.main.temp
      var weatherImage = ''
      var recommendationMessage = ''

      if (temperature <= 4) {
         weatherImage = <img src="/images/패딩.png" alt="패딩" width="500px" />
         recommendationMessage = `오늘의 온도는 ${weathers.main.temp}°C로\n 패딩 입는 것을 추천합니다`
      } else if (temperature <= 8) {
         weatherImage = <img src="/images/니트.png" alt="니트" width="500px" />
         recommendationMessage = `오늘의 온도는 ${weathers.main.temp}°C로\n 니트를 입는 것을 추천합니다`
      } else if (temperature <= 11) {
         weatherImage = <img src="/images/코트.png" alt="코트" width="500px" />
         recommendationMessage = `오늘의 온도는 ${weathers.main.temp}°C로\n 코트를 입는 것을 추천합니다`
      } else if (temperature <= 16) {
         weatherImage = <img src="/images/자켓.png" alt="자켓" width="500px" />
         recommendationMessage = `오늘의 온도는 ${weathers.main.temp}°C로\n 자켓을 입는 것을 추천합니다`
      } else if (temperature <= 19) {
         weatherImage = <img src="/images/맨투맨.png" alt="맨투맨" width="500px" />
         recommendationMessage = `오늘의 온도는 ${weathers.main.temp}°C로\n 맨투맨을 입는 것을 추천합니다`
      } else if (temperature <= 22) {
         weatherImage = <img src="/images/긴팔.png" alt="긴팔" width="500px" />
         recommendationMessage = `오늘의 온도는 ${weathers.main.temp}°C로\n 긴팔을 입는 것을 추천합니다`
      } else if (temperature <= 27) {
         weatherImage = <img src="/images/반팔.png" alt="반팔" width="500px" />
         recommendationMessage = `오늘의 온도는 ${weathers.main.temp}°C로\n 반팔을 입는 것을 추천합니다`
      } else if (temperature <= 28) {
         weatherImage = <img src="/images/민소매.png" alt="민소매" width="500px" />
         recommendationMessage = `오늘의 온도는 ${weathers.main.temp}°C로\n 민소매를 입는 것을 추천합니다`
      }
   }
   return (
      <main>
         <div className="content">
            <p className="maintext">기온별 옷차림</p>

            {weathers && (
               <div>
                  <div className="weatherrecommendwrap">
                     <div className="weatherimage"> {weatherImage}</div>
                     <p className="recommendationmessage">{recommendationMessage}</p>
                  </div>
               </div>
            )}
         </div>
      </main>
   )
}

export default Main4
