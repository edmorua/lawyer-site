import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component ={Home} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

