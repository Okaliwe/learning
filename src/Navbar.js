import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
const Nav = () => {
    return ( 
        <div className="container">
             <nav className="navbar">
                 <h1>T DAN</h1>
              </nav>
         <div className="links">
             <ul>
                 <Link to='/'id='lin' >Home</Link>
                 <Link to='/testimonies'id='lin'>Testimonies</Link>
                 <Link to='/about'id='lin'>About</Link>
             </ul>
             <label >
                 <FaBars />
               </label> 
        </div>
             
        </div>
     
       
     );
}
 
export default Nav;