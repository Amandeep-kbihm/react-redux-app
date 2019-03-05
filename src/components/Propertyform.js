import React from 'react'
import { BrowserRouter as Router, Route, Link,Redirect  } from "react-router-dom";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {singlefetchProperty,updateProperty} from '../actions/todos'
import axios from 'axios'

class Propertyform extends React.Component{
    state = {
        title: "",
        content:"",
    }
    componentDidMount(){
        this.props.singlefetchProperty(this.props.match.params.id)
        //const {property }= this.props.property
       // console.log(property)
        // property.map(item => { 
        //     this.setState({
        //         title: item.title,
        //         content: item.content,
        //     })
        // }) 
    }
    updateProperty = (event) => {
        event.preventDefault();
        const id = this.props.match.params.id
        this.props.updateProperty(id,this.state)
        this.props.history.push("/property");
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }
    render(){
        let {title,content} = this.state
        //console.log(this.props.property.property)
        return(
            <div>
                <h2>Update form</h2>
                <form onSubmit={(event) => this.updateProperty(event)}>
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
        singlefetchProperty,
        updateProperty
    }, dispatch ), {});
}

export default connect(mapStateToProps, mapDispatchToProps)(Propertyform)
