import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {
    let list = props.todos.map(item => {
        return (
        <div key={item.id}>
            <TodoItem id={item.id} completed={item.completed}>
                <span>{item.name}</span>
            </TodoItem>
        </div>
        );
    })
    return (
        <div>
            {list}
        </div>
    );
}
