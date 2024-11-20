import Menu from '../components/Menu'
import Footer from '../components/Footer'
import TodayMain from '../components/TodayMain'
import { Wrap } from '../styles/StyledComponent'

function Today() {
   return (
      <>
         <Menu />
         <Wrap>
            <TodayMain />
         </Wrap>
         <Footer />
      </>
   )
}

export default Today
