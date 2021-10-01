import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Nokia from './components/Nokia';
//import Sidebar from './components/Sidebar';

function App() {

  return ( 
      
  <Router>
    <div  className="App">
      
      <Switch>
       
          <Route path="/about" component={About} /> 
          <Route path="/contacts" component={Contacts} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/Nokia" component={Nokia} />
          <Route path="/" component={Home} />
          {/* <Route path="/sidebar" component={Sidebar} /> */}

          <Header />          
      </Switch>
    </div>
    
  </Router>

  );
}

export default App;