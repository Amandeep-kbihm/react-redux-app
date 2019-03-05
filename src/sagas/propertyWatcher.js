import { put, call, takeLatest, take, all } from 'redux-saga/effects'
import {
    FETCH_PROPERTY, 
    FETCH_PROPERTY_SUCCESS, 
    FETCH_PROPERTY_FAILED,
    ADD_PROPERTY,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAILED,
    SINGLE_FETCH_PROPERTY,
    SINGLE_FETCH_PROPERTY_SUCCESS,
    SINGLE_FETCH_PROPERTY_FAILED,
    UPDATE_PROPERTY,
    UPDATE_PROPERTY_SUCCESS,
    UPDATE_PROPERTY_FAILED,
    DELETE_PROPERTY,
    DELETE_PROPERTY_SUCCESS,
    DELETE_PROPERTY_FAILED
        } from '../actions/todos'
import axios from 'axios';

const apiUrl = 'http://localhost:5000/property';

// Add data
function addProperty(data){
    var headers = {
        'Content-Type': 'application/json',
    }
    return axios.post(apiUrl, data.data, {headers: headers})
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw(error);
    });
}
export function* addPropertyData(id){
    const resp = yield call(addProperty,id)
    if(resp.data.status) {
        yield put({ type: ADD_PROPERTY_SUCCESS, data: resp.data })
    } else {
        yield put({ type: ADD_PROPERTY_FAILED, error: 'Something went wrong'})
    }  
}

// Single fetch
function singlefetchProperty(getId){
    return axios.get('http://localhost:5000/property/'+getId)
}
export function* fetchsinglepropertyData(id){
    const getId = id.id
    const resp = yield call(singlefetchProperty,getId)
   if(resp.data.status){
        yield put ({ type: SINGLE_FETCH_PROPERTY_SUCCESS, data: resp.data})
    }
    else{
        yield put ({ type: SINGLE_FETCH_PROPERTY_FAILED, error: 'somthing went wrong'})
    }
}

// update data
function updateProperty(id,data){
    const getId = id.id
    var headers = {
        'Content-Type': 'application/json',
    }
    return axios.put('http://localhost:5000/property/'+getId, data, {headers: headers})
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw(error);
    });
}
export function* updatePropertyData(id,data){
    const resp = yield call(updateProperty,id,id.data)
    if(resp.status) {
        yield put({ type: UPDATE_PROPERTY_SUCCESS, id:resp.id, data: resp.data })
    } else {
        yield put({ type: UPDATE_PROPERTY_FAILED, error: 'Something went wrong'})
    }  
}

// delete data
function deleteProperty(id){
    const getId = id.id
    return axios.delete('http://localhost:5000/property/'+getId)
}
export function* deletePropertyData(id){
    const resp = yield call(deleteProperty,id)
    //console.log(resp)
   // console.log(resp.status)
    if(resp.data.status) {
        yield put({ type: DELETE_PROPERTY_SUCCESS, data: resp.data })
    } else {
        yield put({ type: DELETE_PROPERTY_FAILED, error: 'Something went wrong'})
    }  
}
// fetah all

function fetchProperty () {
    return axios.get(apiUrl)
}
export function* incrementAsync() {   
    const resp = yield call(fetchProperty)
    if(resp.data.status) {
        yield put({ type: FETCH_PROPERTY_SUCCESS, data: resp.data })
    } else {
        yield put({ type: FETCH_PROPERTY_FAILED, error: 'Something went wrong'})
    }  
}

export default function* watchIncrementAsync() {
    yield all([
        takeLatest(FETCH_PROPERTY, incrementAsync),
        takeLatest(ADD_PROPERTY, addPropertyData),
        takeLatest(SINGLE_FETCH_PROPERTY, fetchsinglepropertyData),
        takeLatest(UPDATE_PROPERTY, updatePropertyData),
        takeLatest(DELETE_PROPERTY, deletePropertyData)
    ])
  
}