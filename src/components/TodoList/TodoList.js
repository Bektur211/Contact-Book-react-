import React from 'react';
import './TodoList.css'

const TodoList = (props) => {
    console.log(props);
    let style = {
        listStyleType: 'none'
    }
    let count = 0
    return (
        <>
        
        <ul style={style} className="list">
         
            {props.arr.map((item,index) => (
                
                <li key = {item.id} className="list__li" >
                    {count+=1}) {item.name} {item.surname} {item.number}
                     <button onClick={() => props.delItem(item.id)}> Del </button>
                    <button onClick={() => props.handleEdit(index)}> Edit </button>
                </li>
                
            ))}
        </ul>
        </>
    );
    
};

export default TodoList;