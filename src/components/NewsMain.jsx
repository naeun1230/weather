import './css/Main.css'
import { Link } from 'react-router-dom'

function NewsMain() {
   return (
      <main>
         <div className="contentwrap">
            <p className="contentheader">WHAT’S NEW</p>
            <div>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0003&twbbsNo=91005244">2024년 단풍 개화 예상 시기</Link>
               </p>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0003&stype=SearchAll&twbbsNo=91004814">2024년 봄꽃 개화 예상 시기</Link>
               </p>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0008&stype=SearchAll&twbbsNo=307">2023년 단풍 개화 예상 시기</Link>
               </p>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0003&stype=SearchAll&twbbsNo=91004187">2023년 봄꽃 개화 예상 시기</Link>
               </p>
               <p className="newslist">
                  <Link to="https://fmc.forest.go.kr/fmc/showTwbbsContDetail.do?bbrssId=BBRSS_0003&stype=SearchAll&twbbsNo=91003980">2022년 단풍 개화 예상 시기</Link>
               </p>
            </div>
         </div>
      </main>
   )
}

export default NewsMain
