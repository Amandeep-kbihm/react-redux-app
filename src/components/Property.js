import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchProperty,addProperty,deleteProperty} from '../actions/todos'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Propertyform from './Propertyform'
import axios from 'axios'

class Property extends React.Component{
    state = {
        title: "",
        content:"",
    }
    componentDidMount(){
        this.props.fetchProperty()
    }
    addProperty = (event) => {
        event.preventDefault();
        this.props.addProperty(this.state)
        this.setState( {
            title:'', 
            content:'', 
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }
    deleteProperty = (id) =>{
        this.props.deleteProperty(id)
    }
    render(){
        let {title,content} = this.state
        return(
            <div>
                <h1>Property List</h1>
                <Link to="/form">Add Property</Link>
                <Route exact path="/form" component={Propertyform}/>
                <ul>
                    {this.props.property && this.props.property.property.map(property => {    
                        return <li key={property.id}>{property.title} 
                                    <Link to={`/form/${property.id}/edit`}>&nbsp;Update</Link>
                                    <a onClick={() => {this.props.deleteProperty(property.id)}}>&nbsp;Delete</a>
                                </li>
                         
                    })}     
                </ul>
                <form onSubmit={(event) => this.addProperty(event)}>
                    <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Title"/><br/><br/>
                    <textarea type="text" name="content" value={content} onChange={this.handleChange} placeholder="Content"/><br/><br/>
                    {/* <textarea  value={content} name="content" onChange={this.handlechange} placeholder="Content"></textarea><br/><br/> */}
                    <input type="submit" value="submit"/>
                 </form>       
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
        addProperty,
        deleteProperty
    }, dispatch ), {});
}

export default connect(mapStateToProps, mapDispatchToProps)(Property)
