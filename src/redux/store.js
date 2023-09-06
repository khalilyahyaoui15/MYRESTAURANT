import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../redux/LoginReducers'; // Import your loginReducer

const rootReducer = combineReducers({
  login: loginReducer,
  // other reducers...
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
