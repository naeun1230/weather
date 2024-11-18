import './css/Main2.css'
import { Link } from 'react-router-dom'

function Main5() {
   return (
      <main>
         <div className="content">
            <p className="maintext">WHAT’S NEW</p>
            <div>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0003&twbbsNo=91005244" style={{ textDecoration: 'none', color: 'black' }}>
                     2024년 단풍 개화 예상 시기
                  </Link>
               </p>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0003&stype=SearchAll&twbbsNo=91004814" style={{ textDecoration: 'none', color: 'black' }}>
                     2024년 봄꽃 개화 예상 시기
                  </Link>
               </p>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0008&stype=SearchAll&twbbsNo=307" style={{ textDecoration: 'none', color: 'black' }}>
                     2023년 단풍 개화 예상 시기
                  </Link>
               </p>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0003&stype=SearchAll&twbbsNo=91004187" style={{ textDecoration: 'none', color: 'black' }}>
                     2023년 봄꽃 개화 예상 시기
                  </Link>
               </p>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0003&stype=SearchAll&twbbsNo=91003980" style={{ textDecoration: 'none', color: 'black' }}>
                     2022년 단풍 개화 예상 시기
                  </Link>
               </p>
            </div>
         </div>
      </main>
   )
}

export default Main5
