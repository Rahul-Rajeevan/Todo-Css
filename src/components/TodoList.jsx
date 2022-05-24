import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({list,onDelete,weChange}) => {
    return (
        <div>
          {list.map(e=><TodoItem value={e.value} id={e.id} completed={e.completed} onDelete={onDelete} weChange={weChange}/>)}
    </div>
  )
}

export default TodoList