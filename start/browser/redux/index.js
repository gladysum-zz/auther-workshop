import { combineReducers } from 'redux';
import users from './users';
import stories from './stories';
import login from './login';
import signup from './signup';

export default combineReducers({ users, stories, login, signup });
