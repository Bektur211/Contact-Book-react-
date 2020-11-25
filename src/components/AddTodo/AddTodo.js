import React, {useState} from 'react';
import './AddTodo.css'
const AddTodo = (props) => {
    let [name,setValue1] = useState('');
    let [surname,setValue2] = useState('');
    let [number,setValue3] = useState('');

    function handleClick(){
        if(!name.trim() || !surname.trim() || !number.trim()){
            return alert("Заполните все поля")
        }
        let newObj = {
            name: name,
            surname:surname,
            number:number,
            id:Date.now(),
            
        }
        props.handleVal(newObj)
        setValue1('')
        setValue2('')
        setValue3('')
    }
    return (
        <div className="AddTodo">
            <h1>Add Contact</h1>
            <input value={name} onChange={(e)=>setValue1(e.target.value)} type="text" placeholder="Name"/>
            <input value={surname} onChange={(e)=>setValue2(e.target.value)} type="text" placeholder="Surname"/>
            <input value={number} onChange={(e)=>setValue3(e.target.value)} type="number" placeholder="Number"/>
            <button onClick={handleClick} className="btn-add">Add</button>
        </div>
    );
};

export default AddTodo;