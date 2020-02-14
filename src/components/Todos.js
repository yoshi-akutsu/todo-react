import React from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
        ));
    } 
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos;
