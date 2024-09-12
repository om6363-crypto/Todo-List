import React from 'react';

const TaskItem = ({ task, toggleComp, delTask }) => {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComp(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => delTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
