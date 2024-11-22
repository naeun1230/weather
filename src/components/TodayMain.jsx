import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers } from '../features/weatherSlice'

import './css/Main.css'

function TodayMain() {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.weathers)
   const [city, setCity] = useState('')
   const [searchedCity, setSearchedCity] = useState('인천')

   const cityMapping = {
      경기: 'Gyeonggi-do',
      고양: 'Goyang-si',
      광주: 'Gwangju',
      김해: 'Gimhae',
      대구: 'Daegu',
      대전: 'Daejeon',
      부산: 'Busan',
      서울: 'Seoul',
      성남: 'Seongnam-si',
      수원: 'Suwon-si',
      안산: 'Ansan-si',
      용인: 'Yongin',
      울산: 'Ulsan',
      인천: 'Incheon',
      전주: 'Jeonju',
      제주: 'Jeju City',
      창원: 'Changwon',
      청주: 'Cheongju-si',
      화성: 'Hwaseong-si',
      평택: 'Pyeongtaek-si',
   }

   const convertCityName = (inputCity) => {
      return cityMapping[inputCity] || inputCity
   }

   const handleInputChange = (event) => {
      setCity(event.target.value)
   }

   const handleSearch = (event) => {
      event.preventDefault() // 폼 제출 시 페이지 리로딩 방지
      if (city) {
         const englishCity = convertCityName(city)
         dispatch(fetchWeathers(englishCity))
         setSearchedCity(city) // 검색된 도시 상태 업데이트
      }
   }

   useEffect(() => {
      dispatch(fetchWeathers('incheon'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <main>
         <div className="contentwrap">
            <p className="contentheader">오늘의 {searchedCity} 날씨</p>

            {weathers && (
               <div className="todaycontent">
                  <img src={`https://openweathermap.org/img/wn/${weathers.weather[0].icon}@4x.png`} style={{ float: 'left', margin: '0 100px' }} alt="날씨 아이콘" width="400px" />
                  <div className="todaytext">
                     <form onSubmit={handleSearch}>
                        <input type="text" value={city} onChange={handleInputChange} placeholder="지역명을 입력하세요" />
                        <button type="submit">검색</button>
                     </form>
                     <p>기온 : {weathers.main.temp}°C</p>
                     <p> 체감온도 : {weathers.main.feels_like}°C </p>
                     <p>날씨 : {weathers.weather[0].description}</p>
                     <p>바람(m/s) : {weathers.wind.speed}</p>
                     <p>습도(%) : {weathers.main.humidity}</p>
                  </div>
               </div>
            )}
         </div>
      </main>
   )
}

export default TodayMain
