import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList"

const Todo = () => {
    let [value,setValue]=useState("");
     let [list,setList]=useState([]);
    const handle=(e)=>setValue(e.target.value)
    const onDelete=(value)=>{
        let newList=list.filter(e=>e.id!==value);
        setList(newList);
    }
    
    return (
    <div>
        <input value={value} onChange={handle} placeholder={'Enter something'}/>
        <button onClick={()=>{
            setList([...list,{id:uuidv4(),value:value,completed:false}]);
            setValue("");
        }}>+</button>
        <TodoList list={list} onDelete={onDelete}/>
        
    </div>
  )
}

export default Todo