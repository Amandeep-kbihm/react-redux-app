import { combineReducers } from 'redux';
import todos from './todos';
import test from './test';
import property from './property';

const todoApp = combineReducers({
    todos,
    test,
    property
})

export default todoApp;