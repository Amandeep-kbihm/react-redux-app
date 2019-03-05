import { combineReducers } from 'redux';
import todos from './todos';
import property from './property';

const todoApp = combineReducers({
    todos,
    property
})

export default todoApp;