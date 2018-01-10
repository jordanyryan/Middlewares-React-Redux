import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import usersReducer from './users_reducer';


const rootReducer = combineReducers({
  form: formReducer,
  users: usersReducer
})

export default rootReducer;