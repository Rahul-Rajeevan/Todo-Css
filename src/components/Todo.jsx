import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList"
import styles from './TodoItem.module.css'

const Todo = () => {
    let [value,setValue]=useState("");
     let [list,setList]=useState([]);
    const handle=(e)=>{
        setValue(e.target.value)
         
    }
    const addList=(val)=>{
   if(val!=='')
        {let p=0;
          for(let i=0;i<list.length;++i)
          {if(list[i].value===value)
            ++p;}
          if(p===0)
          setList([...list,{id:uuidv4(),value:value,completed:false}]);}
    }
    const onDelete=(value)=>{
        let newList=list.filter(e=>e.id!==value);
        setList(newList);
    }
    
    return (
    <div className={styles.q3}>
        <div className={styles.q2}>
        <input value={value} onChange={handle} placeholder={'Enter something'} className={styles.box}/>
        <button onClick={()=>{
            addList(value);
            setValue("");
        }}>ADD</button>
        </div>
        <div className={styles.q4}>
        <TodoList list={list} onDelete={onDelete}/>
        </div>
        
        
    </div>
  )
}

export default Todo