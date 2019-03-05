import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {addTodo,statusTodo,VisibilityFilters} from './actions/todos'

class Todos extends React.Component {
    state = {
        todos: "",
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.todos)
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleClick = (id) => {
        this.props.statusTodo(id)
    }
    activeTodo = (status) => {
        this.props.VisibilityFilters(status)
    }
    render() {       
        let {todos} = this.state
        return(
            <div>
                <h1>TODO</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todos" value={todos} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                <ul>
                    {this.props.todos && this.props.todos.todos.map(todo => {
                        if(this.props.todos.status == "ACTIVE") {
                            if(todo.completed) {
                                return <li key={todo.id}><input type="checkbox" ref="check_me" value={todo.completed} onClick={() => {this.handleClick(todo.id)}}/>{todo.name}</li>
                            } 
                        }
                        else if(this.props.todos.status == "COMPLETE"){
                            if(!todo.completed) {
                                return <li key={todo.id}><input checked type="checkbox" ref="check_me" value={todo.completed} onClick={() => {this.handleClick(todo.id)}}/>{todo.name}</li>
                            }
                        }
                        // else if(this.props.todos.status == "ALL"){
                        //     return <li key={todo.id}><input type="checkbox" ref="check_me" value={todo.completed} onClick={() => {this.handleClick(todo.id)}}/>{todo.name}</li>
                        // }
                        else{
                           // if(todo.completed) {
                                return <li key={todo.id}><input type="checkbox"  ref="check_me" value={todo.completed} onClick={() => {this.handleClick(todo.id)}}/>{todo.name}</li>
                           // } 
                        }   
                    })}
                </ul>
                <button onClick={() => { this.activeTodo("ALL")}}>All</button>
                <button onClick={() => { this.activeTodo("ACTIVE")}}>Active</button>
                <button onClick={() => { this.activeTodo("COMPLETE")}}>Complete</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo,
        statusTodo,
        VisibilityFilters
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)