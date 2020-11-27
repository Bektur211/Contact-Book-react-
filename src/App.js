import React,{useState} from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import EditModal from './components/EditModal/EditModal';
import TodoList from './components/TodoList/TodoList';


const App = (props) => {

    let [arr,setArr] = useState([])
    let [modal,setModal] = useState(false);
    let [editTodo, setEditTodo] = useState({})

    function handleVal(value){
        let newArr = [...arr]
        
        newArr.push(value)
        setArr(newArr)
    }

    function delItem(id){  
       let newArr = arr.filter(item => {
           return item.id !== id
       })
       setArr(newArr)
    }

    function handleEdit(index){
        setModal(true)
        setEditTodo(arr[index])
        console.log(arr[index]);
    }
    function handleSaveTask (newInfo){
        let newArr = arr.map(item => {
            if(item.id === newInfo.id){
                return newInfo
            }
            return item
        })
        setArr(newArr)
        handleCloseModal()  
    }

    function handleCloseModal(){
        setModal(false)
    }
    
    return (
        <div>
            <AddTodo
            handleVal = {handleVal}
            />
            <TodoList 
            arr = {arr}
            delItem = {delItem}
            handleEdit = {handleEdit}
            />
            {modal ? 
            <EditModal
            editTodo={editTodo}
            handleSaveTask = {handleSaveTask}
            handleCloseModal = {handleCloseModal}
            />
            :
            null}
        
        </div>
    );
};

export default App;