import Menu from '../components/Menu'
import Footer from '../components/Footer'
import WearMain from '../components/WearMain'
import { Wrap } from '../styles/StyledComponent'

function Wear() {
   return (
      <>
         <Menu />
         <Wrap>
            <WearMain />
         </Wrap>
         <Footer />
      </>
   )
}

export default Wear
