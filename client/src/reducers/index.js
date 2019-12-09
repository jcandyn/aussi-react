import { combineReducers } from 'redux';
import messagesReducer from './messages';
import newMessageReducer from './new-message';

const reducer = combineReducers({
  messages: messagesReducer,
  newMessage: newMessageReducer,
});

export default reducer;
