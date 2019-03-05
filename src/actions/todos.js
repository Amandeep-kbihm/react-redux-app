//import axios from 'axios';

export const ADD_TODO = 'ADD_TODO'
export const STATUS_TODO = 'STATUS_TODO'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const FETCH_PROPERTY = 'FETCH_PROPERTY'
export const FETCH_PROPERTY_SUCCESS = 'FETCH_PROPERTY_SUCCESS'
export const FETCH_PROPERTY_FAILED = 'FETCH_PROPERTY_FAILED'
export const ADD_PROPERTY = 'ADD_PROPERTY'
export const ADD_PROPERTY_SUCCESS = 'ADD_PROPERTY_SUCCESS'
export const ADD_PROPERTY_FAILED = 'ADD_PROPERTY_FAILED'
export const SINGLE_FETCH_PROPERTY = 'SINGLE_FETCH_PROPERTY'
export const SINGLE_FETCH_PROPERTY_SUCCESS = 'SINGLE_FETCH_PROPERTY_SUCCESS'
export const SINGLE_FETCH_PROPERTY_FAILED = 'SINGLE_FETCH_PROPERTY_FAILED'
export const UPDATE_PROPERTY = 'UPDATE_PROPERTY'
export const UPDATE_PROPERTY_SUCCESS = 'UPDATE_PROPERTY_SUCCESS'
export const UPDATE_PROPERTY_FAILED = 'UPDATE_PROPERTY_FAILED'
export const DELETE_PROPERTY = 'DELETE_PROPERTY'
export const DELETE_PROPERTY_SUCCESS = 'DELETE_PROPERTY_SUCCESS'
export const DELETE_PROPERTY_FAILED = 'DELETE_PROPERTY_FAILED'
export const SET_UPDATES = "SET_UPDATES"
export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function statusTodo(text){
  return {type:STATUS_TODO,text}
}

export function VisibilityFilters(text) {
  return {
    type:SHOW_ALL,
    type:SHOW_COMPLETED,
    type:SHOW_COMPLETED,text
  }
}

export const fetchProperty = () => {
  return {
    type: FETCH_PROPERTY
  };
};
  
export const addProperty = (data) => {
  return {
    type: ADD_PROPERTY,
    data
  }
}

export const singlefetchProperty = (id) => {
  return {
    type: SINGLE_FETCH_PROPERTY,
    id
  }
}

export const updateProperty = (id,data) => {
  return {
    type: UPDATE_PROPERTY,
    id,
    data
  }
}

export const deleteProperty = (id) => {
  return {
    type: DELETE_PROPERTY,
    id
  }
}

export const setUpdated = (data) => {
  return {
    type: SET_UPDATES,
    data
  }
}
