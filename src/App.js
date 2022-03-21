import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Nav from './Navbar';
import Create from './Create';
import Testimony from './testimonies';


function App() {
  return (
    
    <Router>
     
       <div className='container'>
       
            <Nav/>
       </div>
       <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/about"component={About}/>
       <Route path="/create"component={Create}/>
       <Route path="/testimonies" component={Testimony}/>
       
       </Switch>
      
    </Router>
    
  );
}

export default App;
