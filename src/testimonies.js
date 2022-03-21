import img1 from './images/woman2.jpg'
import img2 from './images/man1.jpg'
import img3 from './images/man2.jpg'
import img4 from './images/woman1.jpg'
const Testimony = () => {
    return ( 
        
        <div className="testimonies">
        <div id="gh" className="testimony">
        <img id='im' src={img1}/>
        <h2>caroline Edward</h2>
            <h6>Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus Lorem, ipsum dolor sit amet consectet ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus  adipisicing elit. Non libero mollitia pariatur sit voluptatibus.</h6>
        </div>
        <div className="testimony">
            <img id='im' src={img2}/>
            <h2>David Wills</h2>
            <h6>Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus Lorem, ipsum dolor sit amet consectetur adipisicing el Non libero mollitia pariatur sit voluptatibus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus  adipisicing elit. Non libero mollitia pariatur sit voluptatibus.</h6>
        </div>
        <div className="testimony">
        <img id='im' src={img3}/>
        <h2>Adam smith</h2>
        <h6>Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus Lorem, ipsum dol ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus  adipisicing elit. Non libero mollitia pariatur sit voluptatibus.</h6>
        </div>
        <div className="testimony">
        <img id='im' src={img4}/>
        <h2>Sarah Wood</h2>
        <h6>Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus Lorem, ipsum dolor sit amet mollitia pariatur sit voluptatibus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non libero mollitia pariatur sit voluptatibus  adipisicing elit. Non libero mollitia pariatur sit voluptatibus.</h6>
        </div>
    </div>
     );
}
 
export default Testimony;