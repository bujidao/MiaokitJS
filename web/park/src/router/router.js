import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './../pages/index.js'
import Data from './../pages/data.js'

export default () => {
return (
  <Router>
    <Switch>
      <Route path="/data" component={Data} />
      <Route exact path="/" component={Index} />
    </Switch>
  </Router>
  );
}
