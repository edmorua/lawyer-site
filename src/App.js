import React, { Fragment } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './Components/Hero/Hero'

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component ={Hero} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

