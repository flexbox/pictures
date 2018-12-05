import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PhotoList from './PhotoList'
import PhotoDetails from './PhotoDetails'

function Photos({ match }) {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={PhotoList} />
      <Route path={`${match.url}/:id`} component={PhotoDetails} />
    </Switch>
  )
}

export default Photos
