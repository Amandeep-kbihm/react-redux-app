import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchProperty,deleteProperty} from '../actions/todos'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {styles} from '../styles/style'
import * as Material from '../link/links'


class Property extends React.Component{
    state = {
        title: "",
        content:"",
    }
    componentDidMount(){
        this.props.fetchProperty()
    }
    deleteProperty = (id) =>{
        this.props.deleteProperty(id)
    }
    render(){
        let {classes} = this.props
        let {title,content} = this.state
        return(
            <div>
                <Material.Typography variant="h4" gutterBottom component="h2">
                Properties
                </Material.Typography>
              <div>
              <Material.Paper className={classes.root}>
      <Material.Table  className={classes.table}>
        <Material.TableHead>
          <Material.TableRow>
            <Material.TableCell align="right">ID</Material.TableCell>
            <Material.TableCell align="right">Title</Material.TableCell>
            <Material.TableCell align="right">Content</Material.TableCell>
            <Material.TableCell align="right">Date</Material.TableCell>
            <Material.TableCell align="right">Update</Material.TableCell>
            <Material.TableCell align="right">Delete</Material.TableCell>
          </Material.TableRow>
        </Material.TableHead>
        <Material.TableBody>
          {this.props.property.property.map(n => (
            <Material.TableRow key={n.id}>
              <Material.TableCell component="th" scope="row">
                {n.id}
              </Material.TableCell>
              <Material.TableCell align="right">{n.title}</Material.TableCell>
              <Material.TableCell align="right">{n.content}</Material.TableCell>
              <Material.TableCell align="right">{n.createdAt}</Material.TableCell>
              <Material.TableCell align="right">
                <Link to={`/form/${n.id}/edit`}>&nbsp;Update</Link></Material.TableCell>
            <Material.TableCell align="right">
                <a onClick={() => {this.props.deleteProperty(n.id)}}>&nbsp;Delete</a></Material.TableCell>
            </Material.TableRow>    
          ))}
        </Material.TableBody>
      </Material.Table>
    </Material.Paper>
                {/* <Link to="/add">Add Property</Link> */}
                {/* <ul>
                {this.props.property && this.props.property.property.map(property => {    
                    return <li key={property.id}>{property.title} 
                                <Link to={`/form/${property.id}/edit`}>&nbsp;Update</Link>
                                <a onClick={() => {this.props.deleteProperty(property.id)}}>&nbsp;Delete</a>
                            </li>
                })}     
                </ul> */}
               </div> 
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
