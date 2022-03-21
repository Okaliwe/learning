import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <h5>About us</h5>
            <h5>contact us @</h5>
            <div className="footer">
               <div id="fa">
                   <FaFacebookF/>
               </div>
               <div id="fa">
                  <FaLinkedinIn/>
               </div>
               <div id="fa">
                   <FaGithub/>
               </div>
            </div>
            
        </footer>
      );
}
 
export default Footer;