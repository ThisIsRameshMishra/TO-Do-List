import React from 'react';

import { TodoItem } from './TodoItem';
import './Todos.css';
export const Todos = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin: "40px auto"
    }
    return (
       
            <div className="container my-3" style={myStyle}>
                <h4 className="my-3">Todos List</h4>
                {props.todos.length===0?"No todos to display":
                props.todos.map((todo)=>{
                    
                    
                    return( 
                         <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    
                    );
                })
                }
            </div>
        
    )
}
