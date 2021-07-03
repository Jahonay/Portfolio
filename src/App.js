import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return ( 
  <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/AboutPage' exact component={AboutPage} />
        <Route path='/ContactPage' exact component={ContactPage} />
      </Switch>
    </Router>
    
    </>
  );
}

export default App;