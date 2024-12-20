import './css/Menu.css'
import { NavLink } from 'react-router-dom'

function Menu() {
   return (
      <header>
         <nav>
            <NavLink to="/">
               <img src="/images/logo.png" alt="로고" height="60px" />
            </NavLink>
            <ul>
               <li>
                  <NavLink to="/today">오늘 날씨</NavLink>
               </li>
               <li>
                  <NavLink to="/weather">일기 예보</NavLink>
               </li>
               <li>
                  <NavLink to="/wear">기온별 옷차림</NavLink>
               </li>
               <li>
                  <NavLink to="/news">WHAT'S NEW</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
