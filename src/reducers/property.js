
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
    DELETE_PROPERTY_SUCCESS,
    SET_UPDATES
} from '../actions/todos'

const initialState = {
    property: [
        {id: "",title: "",content: "",slug: "",status: true}
    ],
    propertyUpdated: false,
    selectedProperty: null
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
            selectedProperty: action.data.results[0]
        }
        case UPDATE_PROPERTY_SUCCESS:
    //     const updatedProperty = state.property.map((prop1)=> {
    //        if(prop1.id == action.id) {
    //            return {...prop1, ...action.data}
    //        } else {
    //            return prop1
    //        }
    //    } )
        return {
            ...state,
            propertyUpdated: true,
            //property: updatedProperty
        }
        case DELETE_PROPERTY_SUCCESS:
        const property =  state.property.filter(prop => prop.id != action.data.id);
        return {
            ...state,
            property
        }
        case SET_UPDATES:
        return {
            ...state,
            propertyUpdated: action.data
        }
        default:
        return{
            ...state
        }
    }
}   