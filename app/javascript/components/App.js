import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom'
class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Greeting />} />
        </Switch>
      </Router>
    );
  }
}

export default App
