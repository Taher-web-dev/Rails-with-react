import exp from 'constants';
import { START, FAILURE, GETGREETINGMESSAGE} from '../actions/actions';

const greetingReducer = (state={},action) => {
  switch (action.type) {
      case START:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case GETGREETINGMESSAGE:
        return {
            ...state,
            ...action.payload,
            loading: false,
            error: false,
        };
      default:
        return state;
  }
}

export default greetingReducer;