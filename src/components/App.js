import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'

import Photos from './Photos'

const App = () => (
  <>
    <Header />
    <section>
      <Switch>
        <Route exact path="/" render={props => <Redirect to="/photos" />} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </section>
  </>
)

export default App
