import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component  {

    constructor(props) {
        super(props);
    }

    render() {
                const todos= this.props.items;
                const todoList=todos.map((todo)=>
                        <Todo text={todo.text} priority={todo.priority}  Date={todo.dueDate}/> );
                return (
                            <ul>{todoList}</ul>
                        );




}

}

