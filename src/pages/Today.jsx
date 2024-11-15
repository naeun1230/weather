import { useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Main2 from '../components/Main2'
import Main from '../components/Main'

function Today() {
   return (
      <>
         <Menu />
         <Main></Main>
         <Main2></Main2>
         <Footer />
      </>
   )
}

export default Today
