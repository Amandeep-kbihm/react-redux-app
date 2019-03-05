import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {addProperty} from '../actions/todos'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Propertyadd extends React.Component{
    state = {
        title: "",
        content:"",
    }
    addProperty = (event) => {
        event.preventDefault();
        if(this.props.addProperty(this.state)){
            this.props.history.push('/property')
        }        
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
    render(){
        let {title,content} = this.state
        return (
            <div>
                <h2>Add Property</h2>
                <form onSubmit={(event) => this.addProperty(event)}>
                    <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Title"/><br/><br/>
                    <textarea type="text" name="content" value={content} onChange={this.handleChange} placeholder="Content"/><br/><br/>
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
        addProperty,
    }, dispatch ), {});
}

export default connect(mapStateToProps, mapDispatchToProps)(Propertyadd)
