
import {
    FETCH_PROPERTY,
    FETCH_PROPERTY_SUCCESS,
    ADD_PROPERTY,
    ADD_PROPERTY_SUCCESS,
    SINGLE_FETCH_PROPERTY,
    SINGLE_FETCH_PROPERTY_SUCCESS,
    UPDATE_PROPERTY,
    UPDATE_PROPERTY_SUCCESS,
    DELETE_PROPERTY,
    DELETE_PROPERTY_SUCCESS
} from '../actions/todos'

const initialState = {
    property: [
        {id: "",title: "",content: "",slug: "",status: true}
    ],
  }
export default function property(state=initialState,action){
    switch(action.type){
        case FETCH_PROPERTY_SUCCESS:
        return {
            ...state,
            property: action.data.results
        }
        case ADD_PROPERTY_SUCCESS:
        state.property.push(action.data)
        return {
            ...state
        }
        case SINGLE_FETCH_PROPERTY_SUCCESS:
        return{
            ...state,
            property: action.data.results
        }
        case UPDATE_PROPERTY_SUCCESS:
        state.property.push(action.data)
        return {
            ...state
        }
        case DELETE_PROPERTY_SUCCESS:
        return {
            ...state
        }
        default:
        return{
            ...state
        }
    }
}   