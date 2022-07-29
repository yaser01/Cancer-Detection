import React from 'react';
import './App.css';
//import Home from './pages/index'
import { HashRouter as Router, Switch,Route} from 'react-router-dom';

import Home from './pages'
import WhyUsPage from './pages/whyus'
import SignupPage from './pages/signup'
import ServicesPage from './pages/services';
import OurTestPage from './pages/ourtest';
import ContactUsPage from './pages/contactus';
import LungTestPage from './pages/lungtest';
import ColonTestPage from './pages/colontest';
//import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Switch>
       
        <Route exact path='/' component={Home} />
        <Route path='/whyus' component={WhyUsPage} />
        
        <Route path='/services' component={ServicesPage}/>
        
        <Route path='/contact' component={ContactUsPage} />
        
        <Route path='/ourtest' component={OurTestPage}/>

        <Route path='/test/lung' component={LungTestPage}/>
        <Route path='/test/colon' component={ColonTestPage}/>


      
      </Switch>
    
    </Router>

  );
}

export default App;
