import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/Aboutme';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

import './pages/css/menu.css';
import Menu from './components/Menu';

function App() 
{
  return (

    <Router>

      <div className = "App">

        <Menu />

        <Switch>
          <Route path = "/" exact component = { Home } />
          <Route path = "/aboutme" component = { About } />
          <Route path = "/projects" component = { Projects } />
          <Route path = "/contact" component = { Contact } />
        </Switch>

      </div>

    </Router>

  );
}

export default App;
