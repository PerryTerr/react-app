import './App.css';
import Header from './components/Header';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Home from './components/Home';

//import {useState, useEffect} from 'react'; 


function App() {

  
  
  return ( 
    
    
  <Router>
    <div  className="App">
      
      <Switch>
       
        <Route path="/about" component={About} /> 
          <Route path="/contacts" component={Contacts} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/" component={Home} />

        <Header />
                 
      </Switch>
    </div>
    
    </Router>

  );
}


export default App;
