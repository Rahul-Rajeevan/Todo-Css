import React from 'react';
import Todo from './components/Todo';
import styles from './components/TodoItem.module.css'

function App() {
  return (
    <div className={styles.main}>
      <Todo/>
    </div>
   
  );
}

export default App;
