import Menu from '../components/Menu'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { Wrap } from '../styles/StyledComponent'

function Home() {
   return (
      <>
         <Menu />
         <Wrap>
            <Main />
         </Wrap>
         <Footer />
      </>
   )
}

export default Home
