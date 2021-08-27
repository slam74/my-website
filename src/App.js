import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
