import React, {useState} from 'react';
import './EditModal.css'
const EditModal = (props) => {
    let [item,setItem] = useState(props.editTodo)
    console.log(props);
    
    // function handleEditInput(e){
    //     let newObj = [...item]

    //     // newObj.task = e.target.value
    //     setItem(newObj)
    // }

    function handleSave(){
        console.log(item);
        props.handleSaveTask(item)
    }
    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal} className="close-btn">&times;</button>
                </div>
            
                <input 
                onChange={(e)=>{
                    let newObj = {...item}
                    newObj.name = e.target.value
                    setItem(newObj)
                }}   
                value = {item.name}             
                type = "text"
                />
                <input 
                onChange={(e)=>{
                    let newObj = {...item}
                    newObj.surname = e.target.value
                    setItem(newObj)
                }}   
                value = {item.surname} 
                type = "text"
                />
                <input 
                onChange={(e)=>{
                    let newObj = {...item}
                    newObj.number = e.target.value
                    setItem(newObj)
                }}   
                value = {item.number} 
                type = "text"
                />
                <button onClick={handleSave} className="save-btn">Save</button>
            </div>
        </div>
    );
};

export default EditModal;