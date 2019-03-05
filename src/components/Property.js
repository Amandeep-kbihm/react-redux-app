import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchProperty,deleteProperty} from '../actions/todos'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Property extends React.Component{
    state = {
        title: "",
        content:"",
    }
    componentDidMount(){
        console.log('dd')
        this.props.fetchProperty()
    }
    deleteProperty = (id) =>{
        this.props.deleteProperty(id)
    }
    render(){
        let {title,content} = this.state
        return(
            <div>
                <h1>Property List</h1>
                <Link to="/add">Add Property</Link>
                <ul>
                {this.props.property && this.props.property.property.map(property => {    
                    return <li key={property.id}>{property.title} 
                                <Link to={`/form/${property.id}/edit`}>&nbsp;Update</Link>
                                <a onClick={() => {this.props.deleteProperty(property.id)}}>&nbsp;Delete</a>
                            </li>
                })}     
                </ul>
            </div>  
        )
    }
}
const mapStateToProps = (state) => {
    return {
        property: state.property
    }
}


const mapDispatchToProps = (dispatch) => {
    return Object.assign( {}, bindActionCreators( {
        fetchProperty,
        deleteProperty
    }, dispatch ), {});
}

export default connect(mapStateToProps, mapDispatchToProps)(Property)
