import Menu from '../components/Menu'
import HomeMain from '../components/HomeMain'
import Footer from '../components/Footer'
import { Wrap } from '../styles/StyledComponent'
import WearMain from '../components/WearMain'

function Home() {
   return (
      <>
         <Menu />
         <Wrap>
            <HomeMain />
         </Wrap>
         <Footer />
      </>
   )
}

export default Home
