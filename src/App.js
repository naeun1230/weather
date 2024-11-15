import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
// import React, { useState, useEffect } from 'react'
// import { fetchWeather } from './api/weatherApi'

function App() {
   // console.log(fetchWeather())
   // const [weatherData, setWeatherData] = useState(null) // 날씨 데이터 상태
   // const [loading, setLoading] = useState(true) // 로딩 상태
   // const [error, setError] = useState(null) // 오류 상태

   // // API 호출 함수
   // useEffect(() => {
   //    const getWeather = async () => {
   //       try {
   //          const data = await fetchWeather('incheon') // 인천의 날씨 정보 가져오기
   //          setWeatherData(data) // API에서 받은 데이터를 상태로 설정
   //       } catch (error) {
   //          setError(error.message) // 오류 메시지 설정
   //       } finally {
   //          setLoading(false) // 로딩 상태 false로 변경
   //       }
   //    }

   //    getWeather() // 컴포넌트가 마운트될 때 API 호출
   // }, []) // 빈 배열을 전달하면 컴포넌트가 처음 렌더링될 때만 실행됩니다.

   // // 로딩 중일 때
   // if (loading) return <div>Loading...</div>

   // // 에러 발생 시
   // if (error) return <div>{error}</div>

   // // 날씨 데이터를 성공적으로 가져왔을 때
   return (
      //    <div>
      //       <h1>날씨 정보</h1>
      //       <p>도시: {weatherData.name}</p>
      //       <p>날씨: {weatherData.weather[0].description}</p>
      //       <p>온도: {weatherData.main.temp}°C</p>
      //    </div>
      // )

      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/today" element={<Today />} />
      </Routes>
   )
}

export default App
