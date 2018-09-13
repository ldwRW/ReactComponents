import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Button from '../components/button/button'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Button} />
          <Route exact path="/button" component={Button} />
        </Switch>
      </Router>
    )
  }
}