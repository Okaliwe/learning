import {Link} from 'react-router-dom'
import img1 from './images/how it works.jpg'
import Testimony from '../testimonies';
import Footer from '../Footer';
const Home = () => {
    return ( 
        <div>
            
        <p>CREATIVE MINDS</p>
        <h4>There are many variations of passages of Lorem Ipsum available<br></br> but the majority have suffered alteration.</h4>
         <Link to='/create'id='cre'>GET STARTED</Link>
         <section>
             <div  className='fle'>
             <div>
                 <img src={img1}/>
             </div>
               <div className='how'>
                   <p id='speech'>The working principle of a screen recorder is quite simple.In javascript,<br></br>we can use the mediadevices and mediarecorder interfaces to record the users screen.<br></br>The mediadevices interface asks the user to select<br></br> and grant permission to capture the contents<br></br> of a display or a portion of the screen </p> 
             </div>
             </div>
             
              
                <Testimony/>
                <Footer/>

           
        </section>
    </div>
    
     );
}
 
export default Home;