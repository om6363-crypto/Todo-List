import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComp, delTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComp={toggleComp}
          delTask={delTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
