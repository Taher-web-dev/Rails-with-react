import React from "react";
import PropTypes from "prop-types";
import { createStructuredSelector} from 'reselect';
import { connect } from "react-redux";
import getGreetingMessage from "../Redux/Greeting/thunk/thunk";
class Greeting extends React.Component {
  componentDidMount() {
    this.props.getGreetingMessage();
  }
  render () {
    const {greeting} = this.props;
    let greetingMessage = '';
    try {
      greetingMessage = greeting.message;
    }catch {
      greetingMessage = 'Loading data ...';
    }
    
    return (
      <React.Fragment>
        Message: {greetingMessage}
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: state => state.greeting,
});

const mapDispatchToProps = { getGreetingMessage};
Greeting.propTypes = {
  message: PropTypes.string
};
export default connect(structuredSelector, mapDispatchToProps)(Greeting);
