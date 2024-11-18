import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Weather from './pages/Weather'
import Wear from './pages/Wear'
import News from './pages/News'
import NotFound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/today" element={<Today />} />
         <Route path="/weather" element={<Weather />} />
         <Route path="/wear" element={<Wear />} />
         <Route path="/news" element={<News />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
