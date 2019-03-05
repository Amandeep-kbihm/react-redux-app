import { combineReducers } from 'redux'
import {
  ADD_TODO,
  STATUS_TODO,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../actions/todos'

const initialState = {
  todos: [
    {id: 1, name: "abc", completed: true},
    {id: 2, name: "xyz", completed: true}
  ],
  status: ''
}
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let todos = state.todos
      let id = todos.length + 1
      todos.push({
        id,
        name: action.text,
        completed: true
      })
      return {
          ...state,
        todos
      }
    case STATUS_TODO:
      let todos_status = state.todos
      let newTodos = todos_status.map(todo  =>  {
        if(action.text === todo.id){
            todo.completed = !todo.completed;
        }
        return {
          ...state,
        todo
      }
      })
    case SHOW_COMPLETED:
      let status = action.text
      return {...state,status}
    default:
      return state
  }
}


