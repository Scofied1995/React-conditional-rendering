import React from 'react';
function ToDo() {
  const todoList = [
    { id: 1, priority: 0 },
    { id: 2, priority: 1 },
    { id: 3, priority: 0 },
    { id: 4, priority: 1 },
    { id: 5, priority: 1 },
    { id: 6, priority: 1 },
    { id: 7, priority: 1 },
    { id: 8, priority: 1 },
    { id: 9, priority: 1 },
    { id: 10, priority: 1 }
    ];
  return (
    <div>
      <h2>ToDo</h2>
      {todoList.map((list)=>{
      return <div className={list.priority === 0 ? 'setpriority' : ''}>ToDoItem {list.id}</div>
    })}
    </div>
  );
}

export default ToDo;