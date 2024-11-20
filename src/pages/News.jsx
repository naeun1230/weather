import Menu from '../components/Menu'
import Footer from '../components/Footer'
import NewsMain from '../components/NewsMain'
import { Wrap } from '../styles/StyledComponent'

function News() {
   return (
      <>
         <Menu />
         <Wrap>
            <NewsMain />
         </Wrap>
         <Footer />
      </>
   )
}

export default News
