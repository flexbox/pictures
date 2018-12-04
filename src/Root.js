import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Photos from './components/Photos'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Photos} />
    </Switch>
  </Router>
)

export default Root
