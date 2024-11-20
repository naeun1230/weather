import Menu from '../components/Menu'
import Footer from '../components/Footer'
import WeatherMain from '../components/WeatherMain'
import { Wrap } from '../styles/StyledComponent'

function Weather() {
   return (
      <>
         <Menu />
         <Wrap>
            <WeatherMain />
         </Wrap>
         <Footer />
      </>
   )
}

export default Weather
