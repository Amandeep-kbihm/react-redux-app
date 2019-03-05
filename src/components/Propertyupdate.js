import React from 'react'
import { BrowserRouter as Router, Route, Link,Redirect  } from "react-router-dom";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {singlefetchProperty,updateProperty,setUpdated} from '../actions/todos'
import axios from 'axios'

class Propertyform extends React.Component{
    state = {
        title: "",
        content:"",
    }
    componentWillMount() {
        this.props.setUpdated(false)
    }
    componentDidMount(){
        this.props.singlefetchProperty(this.props.match.params.id)
        
    }
    componentWillReceiveProps(newProps) {
        if(newProps.propertyUpdated) {
            this.props.history.push("/property");
        }
        if(newProps.selectedProperty){
            this.setState({
                title: newProps.selectedProperty.title,
                content: newProps.selectedProperty.content
            })
        }
    }
    updateProperty = (event) => {
        event.preventDefault();
        const id = this.props.match.params.id
        this.props.updateProperty(id,this.state)
           
        
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }
    render(){
        let {title,content} = this.state
       
        return(
            <div>
                <h2>Update form</h2>
               
                <form onSubmit={(event) => this.updateProperty(event)}>
                    <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Title"/><br/><br/>
                    <textarea type="text" name="content" value={content} onChange={this.handleChange} placeholder="Content"/><br/><br/>
                    <input type="submit" value="submit"/>
                 </form>
                {/* })}      */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        property: state.property,
        propertyUpdated: state.property.propertyUpdated,
        selectedProperty: state.property.selectedProperty
    }
}


const mapDispatchToProps = (dispatch) => {
    return Object.assign( {}, bindActionCreators( {
        singlefetchProperty,
        updateProperty,
        setUpdated
    }, dispatch ), {});
}

export default connect(mapStateToProps, mapDispatchToProps)(Propertyform)
