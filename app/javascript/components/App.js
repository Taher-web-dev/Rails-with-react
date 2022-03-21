import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from 'react-router-dom'
import Greeting from './Greeting'
class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Greeting message={"hello,world!"} />} />
        </Routes>
      </Router>
    );
  }
}

export default App
