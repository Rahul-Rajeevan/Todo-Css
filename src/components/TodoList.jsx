import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({list,onDelete}) => {
    return (
        <div>
          {list.map(e=><TodoItem value={e.value} id={e.id} completed={e.completed} onDelete={onDelete}/>)}
    </div>
  )
}

export default TodoList