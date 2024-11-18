import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const AUTH_KEY = '64790b31fcc0b79c398cbfdc4cb88008'

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
   },
})

const fetchFromApi = async (url, params = {}) => {
   try {
      const response = await weatherApi.get(url, { params })
      return response
   } catch (error) {
      console.error(`API요청 오류: ${error.message}`)
      throw error
   }
}

export const getWeathers = (q = 'incheon') => {
   return fetchFromApi('/weather', {
      q,
      appid: AUTH_KEY,
      units: 'metric',
      lang: 'kr',
   })
}

export const getForecasts = (q = 'incheon') => {
   return fetchFromApi('/forecast', {
      q,
      appid: AUTH_KEY,
      units: 'metric',
      lang: 'kr',
   })
}

export default weatherApi
