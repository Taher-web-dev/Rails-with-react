import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from "react-redux";
import Greeting from './Greeting';
import store from "../Redux/configureStore";
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' exact element={<Greeting />} />
        </Routes>
      </Router>
      </Provider>
    );
  }
}

export default App
