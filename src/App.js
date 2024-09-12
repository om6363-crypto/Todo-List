import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './style.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const SaveTasks = JSON.parse(localStorage.getItem('tasks'));
    if (SaveTasks){
      setTasks(SaveTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length>0){
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComp = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const delTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComp={toggleComp} delTask={delTask} />
    </div>
  );
};

export default App;
