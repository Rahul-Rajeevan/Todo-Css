import React, { useState } from 'react'
import styles from './TodoItem.module.css'

const TodoItem = ({value,id,compl,onDelete}) => {
  let [completed,setCompleted]=useState(compl)
  const weChange=(g)=>{
    setCompleted(g.target.checked)
}
  return (
    <div className={styles.q1}>
    <input type="checkbox" checked={completed} onChange={weChange}/>  
    <div className={completed?styles.check:null}>{value}</div>
    <button onClick={()=>onDelete(id)}>X</button>
    </div>
  )
}

export default TodoItem