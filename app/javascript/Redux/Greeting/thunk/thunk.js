import exp from "constants";
import { loadingData, manageFailure, getMessage } from "../actions/actions";
const endPoint = '/api/messages.json';

const fetchMessages = () => (fetch(endPoint));

const getGreetingMessage = () => (dispatch) => {
  dispatch(loadingData);
  fetchMessages()
    .then((res) => res.json())
    .then((result) => dispatch(getMessage(result)))
    .catch((error) => dispatch(manageFailure(error.message)))
}

export default getGreetingMessage;
