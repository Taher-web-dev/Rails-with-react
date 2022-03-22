import { createStore, applyMiddleware, combineReducers } from "redux";
import greetingReducer from "./Greeting/Reducer/reducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(reducer,
    applyMiddleware(thunk));
export default store;