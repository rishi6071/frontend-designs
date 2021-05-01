import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Error from './component/Error';

const App = () => {

  return (
    <React.Fragment>

      {/* Navigation Bar */}
      <Navbar />

      {/* Different Page Components */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route component={Error} />
      </Switch>

    </React.Fragment>
  );
}

export default App;