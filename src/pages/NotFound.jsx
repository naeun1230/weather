import Menu from '../components/Menu'
import Footer from '../components/Footer'
import NotFoundMain from '../components/NotFoundMain'
import { Wrap } from '../styles/StyledComponent'

function NotFound() {
   return (
      <>
         <Menu />
         <Wrap>
            <NotFoundMain />
         </Wrap>
         <Footer />
      </>
   )
}

export default NotFound
